"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_models_1 = require("../models/users.models");
const uuid_1 = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield users_models_1.usersModel.findOne({ username });
        if (user && user.status) {
            const isMatch = yield bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).send("Password Invalid!!!");
            }
            const payload = {
                user: {
                    id: user.id,
                    name: user.fullname, // ใช้ ID ผู้ใช้สำหรับการอ้างอิง
                    role: user.role,
                },
            };
            const refreshToken = (0, uuid_1.v4)();
            //    const playload = {
            //     user:{
            //       username: user.username,
            //       role:user.role
            //     }
            //    };
            jwt.sign(payload, process.env.jwtKey, { expiresIn: "1h" }, (err, token) => {
                console.log(token);
                if (err)
                    throw err;
                res.status(200).json({
                    data: {
                        token: token,
                        tokenType: "Bearer",
                        expires: Date.now() + 3600000,
                        refreshToken: refreshToken,
                    },
                    code: 200,
                    message: `sucess`,
                    payload,
                });
            });
        }
        else {
            return res.status(400).send("User Not found!!!");
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Login Fail!!!");
    }
});
