const express = require("express");
const compRouter = express.Router();
const compController = require("../controller/companyController");
const { verifyToken, isAdmin } = require("../middleware/authorization");

compRouter.get("/getAllCompany", verifyToken, isAdmin, getAllCompanies);
compRouter.get("/getComp", verifyToken, getCompanyDetail);
compRouter.get(
  "/getCompWithEmp",
  verifyToken,
  isAdmin,
  getAllCompaniesWithEmployees
);

compRouter.post("/createComp", verifyToken, isAdmin, createCompany);
compRouter.post(
  "/createCompWithEmployees",
  verifyToken,
  isAdmin,
  createCompanyWithEmployees
);

compRouter.put("/updateComp", verifyToken, isAdmin, updateCompany);
compRouter.delete("/deleteComp", verifyToken, isAdmin, deleteCompany);

module.exports = compRouter;
