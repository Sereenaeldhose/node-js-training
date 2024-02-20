const express = require("express");
const compRouter = express.Router();
const compController = require("../controller/companyController");

compRouter.get("/getAllCompany", getAllCompanies);
compRouter.get("/getComp", getCompanyDetail);
compRouter.get("/getCompWithEmp", getAllCompaniesWithEmployees);

compRouter.post("/createComp", createCompany);
compRouter.post("/createCompWithEmployees", createCompanyWithEmployees);

compRouter.put("/updateComp", updateCompany);
compRouter.delete("/deleteComp", deleteCompany);

module.exports = compRouter;
