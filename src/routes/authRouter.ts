import { Request, Response } from "express";

const express = require('express');
const router = express.Router();

router.get('/',(req:Request,res:Response)=>{
    console.log('Hit Auth Route');
    res.send('Auth Route');
})

export { router as authRouter };
