const express = require("express");
const projectRouter = express.Router();
const projectController = require("../controller/projectController");

projectRouter.get("/getAllProjects", getAllProjects);
projectRouter.get("/getProjectById", getProjectById);
projectRouter.get("/getProjectWithEmp", getProjectWithEmployees);
projectRouter.get("/getAllProjectWithEmp", getAllProjectWithEmployees);

projectRouter.post("/createProject", createProject);
projectRouter.post(
  "/createProWithEmpAndComp",
  createProjectWithEmpAndCompany
);
projectRouter.post("/attachEmpWithProject", attachEmployeesWithProject);

projectRouter.put("/updateProject", updateProject);
projectRouter.delete("/deleteProject", deleteProject);

module.exports = projectRouter;
