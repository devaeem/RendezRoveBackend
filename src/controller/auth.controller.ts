import express, { Application, Request, Response } from "express";
import { usersModel } from "../models/users.models";
import { v4 as uuidv4 } from "uuid";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await usersModel.findOne({ username });
    if (user && user.status) {
      const isMatch = await bcrypt.compare(password, user.password);
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
      const refreshToken = uuidv4();
      //    const playload = {
      //     user:{
      //       username: user.username,
      //       role:user.role
      //     }
      //    };
      jwt.sign(
        payload,
        process.env.jwtKey,
        { expiresIn: "1h" },
        (err: any, token: any) => {
          console.log(token);
          if (err) throw err;

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
        }
      );
    } else {
      return res.status(400).send("User Not found!!!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Login Fail!!!");
  }
};
