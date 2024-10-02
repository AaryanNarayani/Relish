"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express = require('express');
const router = express.Router();
exports.adminRouter = router;
router.get('/', (req, res) => {
    console.log('Hit Hotel Admin Route');
    res.send('Admin Hotel Route');
});
