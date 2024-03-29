const db = require("../config/db");
const Employee = db.Employee;
const Company = db.Company;
const logger = require("../config/logger.js"); 

//------------------------------
getAllEmployees = async (req, res) => {
  try {
    res.status(200).json({ employees: await Employee.findAll() });
  } catch (error) {
    logger.error("Failed to Fetch Employee ",error);
    res.status(500).send("Failed to Fetch Employees");
  }
};

//------------------------------
getEmployeeDetail = async (req, res) => {
  try {
    res.status(200).json({ employee: await Employee.findByPk(req.query.id) });
  } catch (error) {
    logger.error("Failed to Fetch Employee Details",error);

    res.status(500).send("Failed to Fetch Employee Details");
  }
};

//------------------------------
getEmployeeWithCompany = async (req, res) => {
  try {
    res.status(200).json({
      employee: await Employee.findByPk(req.query.id, {
        include: [
          {
            model: Company,
            attributes: ["name", "status"],
          },
        ],
      }),
    });
  } catch (error) {
    logger.error("Failed to Fetch Employee Details Including Company",error);
    res.status(500).send("Failed to Fetch Employee Details Including Company");
  }
};

//------------------------------
createEmployee = async ( req, res) => {
  try {
    await Employee.create({
      name: req.body.name,
      email: req.body.email,
      designation: req.body.designation,
      age: req.body.age,
      companyId: req.body.companyId,
    });

    res.status(200).send("Successfully Created Employee");
  } catch (error) {
    logger.error("Failed to Create Employee",error);
    res.status(500).send("Failed to Create Employee");
  }
};

//------------------------------
updateEmployee = async (req, res) => {
  try {
    const emp = await Employee.findByPk(req.query.id);
    if (emp.length > 0) {
      await Employee.update(
        {
          name: req.body.name,
          email: req.body.email,
          designation: req.body.designation,
          age: req.body.age,
          companyId: req.body.companyId,
        },
        { where: { id: req.query.id } }
      );
      return res.status(200).send("Successfully Updated Employee");
    }
    return res.status(200).send("No Records Found to Update");
  } catch (error) {
    logger.error("Failed to Update Employee",error);
    res.status(500).send("Failed to Update Employee");
  }
};

//------------------------------
deleteEmployee = async (req, res) => {
  try {
    const emp = await Employee.findByPk(req.query.id);
    if (emp.length > 0) {
      await Employee.destroy({ where: { id: req.query.id } });
    }
    return res.status(200).send("No Records Found to Destroy");
  } catch (error) {
    logger.error("Failed to Destroy Employee",error);
    res.status(500).send("Failed to Destroy Employee");
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeDetail,
  getEmployeeWithCompany,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
