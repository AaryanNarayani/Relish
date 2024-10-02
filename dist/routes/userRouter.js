"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express = require('express');
const router = express.Router();
exports.userRouter = router;
router.get('/', (req, res) => {
    console.log('Hit User Route');
    res.send('User Route');
});
