import express from "express";
const router = express.Router();


const usersRoutes = require('../Routes/users.routes')
const authRoutes = require('../Routes/auth.routes')
const apiversion = 'v1'

router.use(`/${apiversion}`,usersRoutes)
router.use(`/${apiversion}`,authRoutes)
module.exports = router;
