const express = require("express");
const projectRouter = express.Router();
const projectController = require("../controller/projectController");
const { verifyToken, isAdmin } = require("../middleware/authorization");

projectRouter.get("/getAllProjects", verifyToken, isAdmin, getAllProjects);
projectRouter.get("/getProjectById", verifyToken, getProjectById);
projectRouter.get(
  "/getProjectWithEmp",
  verifyToken,
  isAdmin,
  getProjectWithEmployees
);
projectRouter.get(
  "/getAllProjectWithEmp",
  verifyToken,
  isAdmin,
  getAllProjectWithEmployees
);

projectRouter.post("/createProject", verifyToken, isAdmin, createProject);
projectRouter.post(
  "/createProWithEmpAndComp",
  verifyToken,
  isAdmin,
  createProjectWithEmpAndCompany
);
projectRouter.post(
  "/attachEmpWithProject",
  verifyToken,
  isAdmin,
  attachEmployeesWithProject
);

projectRouter.put("/updateProject", verifyToken, isAdmin, updateProject);
projectRouter.delete("/deleteProject", verifyToken, isAdmin, deleteProject);

module.exports = projectRouter;
