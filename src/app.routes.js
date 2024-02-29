const express = require("express");
const AuthRouter = require("./modules/auth/auth.routes");
const mainRouter = express.Router();
mainRouter.use('/auth', AuthRouter.authRouter);
module.exports = mainRouter;
