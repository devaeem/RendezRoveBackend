"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).send("Authorization header is missing or invalid");
        }
        const token = authHeader.replace("Bearer ", "");
        if (!process.env.jwtKey) {
            throw new Error("JWT key is missing");
        }
        const decoded = jwt.verify(token, process.env.jwtKey);
        req.user = decoded.user;
        next();
    }
    catch (err) {
        console.error(err);
        return res.status(403).json({
            message: "Authorization failed",
            error: err,
        });
    }
};
exports.auth = auth;
