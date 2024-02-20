const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController");
const {userValidationRules,validate} = require("../middleware/validation");

userRouter.get("/getUser", getUserById);

userRouter.post("/createUser",userValidationRules(),validate,userController.createUser);
userRouter.post("/signIn", signIn);

module.exports = userRouter;

