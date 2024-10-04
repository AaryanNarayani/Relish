import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "../utils";
import { getPrisma } from "../utils/getPrisma";
interface AuthRequest extends Request {
    userId?: number;
}
const authMiddleware = async (req:AuthRequest, res:Response, next:NextFunction) => {    
try{
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    if (!authorization.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authorization.split(" ")[1];
    const decoded= jwt.verify(token, JWT_SECRET as string) as JwtPayload;
    const prisma = getPrisma();
    const user = await prisma.user.findUnique({
        where: { id: decoded.id as number },
    });

    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    req.userId = user.id;
    next();
}catch(e:any){
    if (e.name === 'TokenExpiredError') {
        return res.status(401).json({ message: "Token expired" });
    }  
    console.error("Error Authenticating the User (middleware):", e);
    res.status(500).json({ message: "Internal Server Error" });
}
}
export default authMiddleware;
