"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = require("./routes/userRouter");
const authRouter_1 = require("./routes/authRouter");
const adminRouter_1 = require("./routes/adminRouter");
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use('/api/v1/user', userRouter_1.userRouter);
app.use('/api/v1/admin', adminRouter_1.adminRouter);
app.use('/api/v1/auth', authRouter_1.authRouter);
app.get('/', (req, res) => {
    res.send('Welcome to Relish!');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
