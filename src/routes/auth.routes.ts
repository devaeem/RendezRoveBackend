import express from "express";
const router = express.Router();


const {
    login,
   
   
 } = require("../controller/auth.controller");

 router.post("/auth/login",login);
 

 module.exports = router;