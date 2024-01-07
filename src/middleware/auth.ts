import { mongoose } from "@typegoose/typegoose";
import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
import { usersModel } from "../models/users.models";

interface RequestWithUser extends Request {
  user?: any; 
}

export const auth = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
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
  } catch (err) {
    console.error(err);
    return res.status(403).json({
      message: "Authorization failed",
      error: err,
    });
  }
};
