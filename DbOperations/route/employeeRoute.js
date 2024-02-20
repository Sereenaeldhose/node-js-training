const express = require("express");
const empRouter = express.Router();
const empController = require("../controller/employeeController");

empRouter.get("/getAllEmployees", getAllEmployees);
empRouter.get("/getEmp", getEmployeeDetail);
empRouter.get("/getEmpWithComp", getEmployeeWithCompany);

empRouter.post("/createEmp",createEmployee);

empRouter.put("/updateEmp", updateEmployee);
empRouter.delete("/deleteEmp", deleteEmployee);

module.exports = empRouter;
