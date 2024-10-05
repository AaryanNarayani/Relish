import { NextFunction, Request, Response } from "express";
import registerSchema from "../types/auth/registerSchema";
import loginSchema from "../types/auth/loginSchema";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import authMiddleware from "../middlewares/authMiddleware";
import passport from "passport";
import changePwShema from "../types/auth/changePwSchema";
import { JWT_SECRET } from "../utils";
import { getPrisma } from "../utils/getPrisma";

const express = require("express");
const router = express.Router();
interface CustomUser {
  id: string;
  email: string;
  displayName: string;
  photos: { value: string }[];
  _json: JSON; 
}

interface CustomRequest extends Request {
  user?: CustomUser;
}

interface AuthRequest extends Request {
  userId?: number;
}

router.get("/", (req: Request, res: Response) => {
  console.log("Hit Auth Route");
  res.send("Auth Route");
});

router.get("/login/success", async (req: CustomRequest, res: Response) => {
  if (req.user) {
    try {
      const prisma = getPrisma();
      const user = await prisma.user.upsert({
        where: { email: req.user.email },
        update: {
          googleId: req.user.id,
          googleProfile: JSON.parse(JSON.stringify(req.user._json)),
          avatar: req.user.photos[0].value || '',
        },
        create: {
          name: req.user.displayName,
          email: req.user.email,
          googleId: req.user.id,
          googleProfile: JSON.parse(JSON.stringify(req.user._json)),
          avatar: req.user.photos[0].value || '',
          isVerified: true,
        },
      });

      const token = jwt.sign({ id: user.id }, JWT_SECRET as string, {
        expiresIn: "3h",
      });

      return res.status(200).json({
        error: false,
        message: "Successfully Logged In",
        user: user,
        token: token,
      });
      
    } catch (error) {
      console.error("Error during login success handling:", error);
      res.status(500).json({ error: true, message: "Internal Server Error" });
    }
  } else {
    return res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

router.get("/login/failed", (_:Request, res: Response) => {
  return res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.get("/logout", (req:Request, res:Response, next:NextFunction) => {
  req.logout((err) => {
    if (err) { return next(err); }
    const clientUrl = process.env.CLIENT_URL || "/";
    res.redirect(clientUrl);
  });
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback",passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL || "/",
    failureRedirect: "/login/failed",
  })
);

router.post("/change-password",authMiddleware,async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;
    const { body: payload } = req;
    const { success, error } = changePwShema.safeParse(payload);
    if (!success) {
      console.log("Invalid Payload", error);
      return res.status(411).json({ message: "Invalid inputs sent" });
    }

    const prisma = getPrisma();
    const user = await prisma.user.findUnique({
      where: { id: userId as number },
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const isPasswordValid = await bcrypt.compare(
      payload.oldPassword,
      user.password as string
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    if (payload.oldPassword === payload.newPassword) {
      return res
        .status(400)
        .json({ message: "Old and New Passwords are same" });
    }

    const hashedPw = await bcrypt.hash(payload.newPassword, 10);
    await prisma.user.update({
      where: { id: userId as number },
      data: {
        password: hashedPw,
      },
    });

    res.status(200).json({ message: "Password Changed Successfully" });
  } catch (e) {
    console.error("Error during changing password:", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
);

router.post("/register", async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { success, error } = registerSchema.safeParse(payload);

    if (!success) {
      console.log("Invalid Payload", error);
      return res.status(400).json({ message: "Invalid inputs sent" });
    }

    const prisma = getPrisma();
    const userExists = await prisma.user.findUnique({ 
      where: { email: payload.email },
    });

    if (userExists) {
      return res.status(409).json({ message: "User Already Exists" });
    }

    const hashedPw = await bcrypt.hash(payload.password, 10);
    const user = await prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        password: hashedPw,
        address: payload.address || "",
      },
    });

    const token = jwt.sign({ id: user.id }, JWT_SECRET as string, {
      expiresIn: "3h",
    });

    res
      .status(201)
      .json({
        message: "User Registered Successfully",
        token: token,
        user: user.id,
      });
  } catch (e) {
    console.error("Error during registration:", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { body: payload } = req;
    const { success, error } = loginSchema.safeParse(payload);

    if (!success) {
      console.log("Invalid Payload", error);
      return res.status(400).json({ message: "Invalid inputs sent" });
    }

    const prisma = getPrisma();
    const user = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (!user || !user.password) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const isPasswordValid = await bcrypt.compare(
      payload.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET as string, {
      expiresIn: "3h",
    });

    res
      .status(200)
      .json({ message: "Login Success", token: token, user: user.id });
  } catch (e) {
    console.error("Error during login:", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/me", authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;
    const prisma = getPrisma();
    const user = await prisma.user.findUnique({
      where: { id: userId as number },
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    res.status(200).json({ user });
  } catch (e) {
    console.error("Error during fetching user:", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


export { router as authRouter };
