const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup");
userRouter.post("/login");
userRouter.post("/logout");

module.exports = userRouter;