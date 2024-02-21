const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController");
const {validateUserInput,validate} = require("../middleware/userValidations");

userRouter.get("/getUser", getUserById);
userRouter.post("/createUser",validateUserInput(),validate,createUser);
userRouter.post("/signIn", signIn);

module.exports = userRouter;

