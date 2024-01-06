import express from "express";
const router = express.Router();

const {
    list,
   create,
   update,
   remove,
   active,
   
 } = require("../controller/users.controller");

 router.get("/users",  list);
 router.post("/users",  create);
 router.put("/users/:id",  update);
 router.put("/user/:id",  remove);
 router.put("/activeusers/:id", active);

 module.exports = router;