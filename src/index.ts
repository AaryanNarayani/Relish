import express, { Request, Response } from 'express';
import { userRouter } from './routes/userRouter';
import { authRouter } from './routes/authRouter';
import { adminRouter } from './routes/adminRouter';

const app = express();
const port = 8080;

app.use(express.json());
app.use('/api/v1/user',userRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/auth',authRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Relish!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});