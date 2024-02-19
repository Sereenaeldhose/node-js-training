const express = require("express");
const empRouter = express.Router();
const empController = require("../controller/employeeController");


empRouter.get("/getAllCompany", getAllCompanies);
empRouter.get("/getComp", getCompanyDetail);
empRouter.get("/getAllEmployees",  getAllEmployees);
empRouter.get("/getEmp", getEmployeeDetail);
empRouter.get("/getCompWithEmp", getAllCompaniesWithEmployees);


empRouter.post("/createComp", createCompany);
empRouter.post("/createEmp", createEmployee);

// empRouter.put("/updateComp", updateCompany);
// empRouter.put("/scriptsupdateEmp", updateEmployee);

// empRouter.delete("/deleteComp", deleteCompany);
// empRouter.delete("/deleteEmp", deleteEmployee);


module.exports = empRouter;
