require('dotenv').config();
import express, { Request, Response } from "express";
import { userRouter } from "./routes/userRouter";
import { authRouter } from "./routes/authRouter";
import { adminRouter } from "./routes/adminRouter";
import { restoRouter } from "./routes/restoRouter";
import { getPrisma } from "./utils/getPrisma";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Relish API',
            version: '1.0.0',
            description: 'API documentation for Relish',
        },
        servers: [
            {
                url: 'http://localhost:8080',
            },
        ],
    },
    apis: ['./routes/*.ts'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const port = 8080;


app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/resto", restoRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Relish!");
  try {
    const prisma = getPrisma();
    console.log("Database Connected successfully");
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
