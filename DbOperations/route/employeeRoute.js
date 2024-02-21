const express = require("express");
const empRouter = express.Router();
const empController = require("../controller/employeeController");
const { verifyToken, isAdmin } = require("../middleware/authorization");

empRouter.get("/getAllEmployees", verifyToken, isAdmin, getAllEmployees);
empRouter.get("/getEmp", verifyToken, getEmployeeDetail);
empRouter.get("/getEmpWithComp", verifyToken, getEmployeeWithCompany);

empRouter.post("/createEmp", verifyToken, isAdmin, createEmployee);

empRouter.put("/updateEmp", verifyToken, isAdmin, updateEmployee);
empRouter.delete("/deleteEmp", verifyToken, isAdmin, deleteEmployee);

module.exports = empRouter;
