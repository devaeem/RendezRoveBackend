"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { list, create, update, remove, active, } = require("../controller/users.controller");
router.get("/users", list);
router.post("/users", create);
router.put("/users/:id", update);
router.put("/user/:id", remove);
router.put("/activeusers/:id", active);
module.exports = router;
