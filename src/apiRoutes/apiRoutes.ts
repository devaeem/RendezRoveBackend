import express from "express";
const router = express.Router();


const usersRoutes = require('../Routes/users.routes')
const apiversion = 'v1'

router.use(`/${apiversion}`,usersRoutes)

module.exports = router;
