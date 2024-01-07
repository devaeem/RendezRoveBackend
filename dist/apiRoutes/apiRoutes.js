"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const usersRoutes = require('../Routes/users.routes');
const authRoutes = require('../Routes/auth.routes');
const apiversion = 'v1';
router.use(`/${apiversion}`, usersRoutes);
router.use(`/${apiversion}`, authRoutes);
module.exports = router;
