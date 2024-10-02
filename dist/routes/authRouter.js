"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express = require('express');
const router = express.Router();
exports.authRouter = router;
router.get('/', (req, res) => {
    console.log('Hit Auth Route');
    res.send('Auth Route');
});
