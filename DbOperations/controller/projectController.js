const db = require("../config/db");
const Employee = db.Employee;
const Company = db.Company;
const Project = db.Project;
const logger = require("../config/logger.js"); 

//------------------------------
getAllProjects = async (req, res) => {
  try {
    res.status(200).json({ projects: await Project.findAll() });
  } catch (error) {
    logger.error("Failed to Fetch Projects",error);
    res.status(500).send("Failed to Fetch Projects");
  }
};

//------------------------------
getAllProjectWithEmployees = async (req, res) => {
  try {
    res.status(200).json({
      project_with_employees: await Project.findAll({
        include: [
          {
            model: Employee,
            attributes: ["name", "email", "designation", "age"],
          },
        ],
      }),
    });
  } catch (error) {
    logger.error("Failed to Fetch Projects With Employees",error);
    res.status(500).send("Failed to Fetch Projects With Employees");
  }
};

//------------------------------
getProjectById = async (req, res) => {
  try {
    res.status(200).json({ project: await Project.findByPk(req.query.id) });
  } catch (error) {
    logger.error("Failed to Fetch Project",error);
    res.status(500).send("Failed to Fetch Project Details");
  }
};

//------------------------------
getProjectWithEmployees = async (req, res) => {
  try {
    res.status(200).json({
      project_with_employees: await Project.findByPk(req.query.id, {
        include: [
          {
            model: Employee,
            attributes: ["name", "email", "designation", "age"],
          },
        ],
      }),
    });
  } catch (error) {
    logger.error("Failed to Fetch Project With Employees ",error);
    res.status(500).send("Failed to Fetch Projects With Employees");
  }
};

//------------------------------
createProject = async (req, res) => {
  try {
    await Project.create({ name: req.body.name, status: req.body.status });

    res.status(200).send("Successfully Created Project");
  } catch (error) {
    logger.error("Failed to Create Project ",error);
    res.status(500).send("Failed to Create Project");
  }
};

//------------------------------
updateProject = async (req, res) => {
  try {
    const comp = await Project.findByPk(req.query.id);
    if (comp.length > 0) {
      await Project.update(
        { name: req.body.name, status: req.body.status },
        { where: { id: req.query.id } }
      );
      return res.status(200).send("Successfully Updated Project");
    }
    return res.status(200).send("No Records Found to Update");
  } catch (error) {
    logger.error("Failed to Update Project ",error);
    res.status(500).send("Failed to Update Project");
  }
};

//------------------------------
deleteProject = async (req, res) => {
  try {
    const comp = await Project.findByPk(req.query.id);
    if (comp.length > 0) {
      await Project.destroy({ where: { id: req.query.id } });
    }
    return res.status(200).send("No Records Found to Destroy");
  } catch (error) {
    logger.error("Failed to Destroy Project ",error);
    res.status(500).send("Failed to Destroy Project");
  }
};

//------------------------------
createProjectWithEmpAndCompany = async (req, res) => {
  try {
    const comp = await Company.create({
      name: req.body.name,
      status: req.body.status,
    });
    const project = await Project.create({
      name: req.body.projectName,
      status: req.body.projectStatus,
    });
    for (let emp of req.body.employees) {
      const employee = await Employee.create({
        name: emp.name,
        email: emp.email,
        designation: emp.designation,
        age: emp.age,
        companyId: comp.id,
      });
      employee.addProject(project);
    }
    res.status(200).send("Successfully Created Project With Given Employees");
  } catch (error) {
    logger.error("Failed to Attache Employee to Project ",error);
    res.status(500).send("Failed to Create Project");
  }
};

//------------------------------
attachEmployeesWithProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.query.projectId);

    project.addEmployee(
      await Employee.findAll({ where: { companyId: req.query.companyId } })
    );

    res.status(200).send("Successfully Attached the Employees to the Project");
  } catch (error) {
    logger.error("Failed to Attache Employee to Project ",error);
    res.status(500).send("Failed to Attache Employees to Project");
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  getProjectWithEmployees,
  getAllProjectWithEmployees,
  createProject,
  updateProject,
  deleteProject,
  createProjectWithEmpAndCompany,
  attachEmployeesWithProject,
};
