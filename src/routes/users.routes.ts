import express from "express";
const router = express.Router();
import { validatePagination } from '../controller/validatePagination';

const {
    list,
   create,
   update,
   remove,
   active,
   
 } = require("../controller/users.controller");

 router.get("/users",validatePagination,list);
 router.post("/users",  create);
 router.put("/users/:id",  update);
 router.delete("/user/:id",  remove);
 router.put("/activeusers/:id", active);

 module.exports = router;