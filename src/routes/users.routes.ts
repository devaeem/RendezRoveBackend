import express from "express";
const router = express.Router();
import { auth } from "../middleware/auth";
import { validatePagination } from "../controller/validatePagination";

const {
  list,
  create,
  update,
  remove,
  active,
} = require("../controller/users.controller");

router.get("/users", auth, validatePagination, list);
router.post("/users", auth, create);
router.put("/users/:id", auth, update);
router.delete("/user/:id", auth, remove);
router.put("/activeusers/:id", auth, active);

module.exports = router;
