import { Request, Response } from "express";

const express = require('express');
const router = express.Router();

router.get('/',(req:Request,res:Response)=>{
    console.log('Hit Hotel Admin Route');
    res.send('Admin Hotel Route');
})

export { router as adminRouter };
