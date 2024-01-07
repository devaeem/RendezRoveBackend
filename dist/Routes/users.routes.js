"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../middleware/auth");
const validatePagination_1 = require("../controller/validatePagination");
const { list, create, update, remove, active, } = require("../controller/users.controller");
router.get("/users", auth_1.auth, validatePagination_1.validatePagination, list);
router.post("/users", auth_1.auth, create);
router.put("/users/:id", auth_1.auth, update);
router.delete("/user/:id", auth_1.auth, remove);
router.put("/activeusers/:id", auth_1.auth, active);
module.exports = router;
