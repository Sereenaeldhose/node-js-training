const db = require("../config/db");
const Employee = db.Employee;
const Company = db.Company;

getAllCompanies = async (req, res) => {
  try {
    res.status(200).json({ companies: await Company.findAll() });
  } catch (error) {
    res.status(500).send("Failed to Fetch Companies");
  }
};

getAllEmployees = async (req, res) => {
  try {
    res.status(200).json({ employees: await Employee.findAll() });
  } catch (error) {
    res.status(500).send("Failed to Fetch Employees");
  }
};

getAllCompaniesWithEmployees = async (req, res) => {
  try {
    res.status(200).json({
      companies_with_employees: await Company.findAll({
        include: [
          {
            model: Employee,
            attributes: ["name", "email", "designation", "age"],
          },
        ],
      }),
    });
  } catch (error) {
    res.status(500).send("Failed to Fetch Companies With Employees");
  }
};

getEmployeeDetail = async (req, res) => {
  try {
    res.status(200).json({ employee: await Employee.findByPk(req.query.id) });
  } catch (error) {
    res.status(500).send("Failed to Fetch Employee Details");
  }
};

getEmployeeWithCompany = async (req, res) => {
  try {
    res.status(200).json({
      employee: await Employee.findByPk(req.query.id, {
        include: [
          {
            model: Profile,
            attributes: ["status", "mobile"],
          },
        ],
      }),
    });
  } catch (error) {
    res.status(500).send("Failed to Fetch Employee Details");
  }
};

getCompanyDetail = async (req, res) => {
  try {
    res.status(200).json({ company: await Company.findByPk(req.query.id) });
  } catch (error) {
    res.status(500).send("Failed to Fetch Employee Details");
  }
};


createCompany = async (req, res) => {
  try {
  await Company.create({name:req.body.name, status:req.body.status}) ;

    res.status(200).send("Successfully Created Company");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to Create Company");
  }
};



createEmployee = async (req, res) => {
  try {
  await Employee.create({name:req.body.name, email:req.body.email, designation:req.body.designation,age:req.body.age,companyId:req.body.companyId}) ;

    res.status(200).send("Successfully Created Employee");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to Create Employee");
  }
};

module.exports = {
  getAllCompanies,
  getCompanyDetail,
  getAllEmployees,
  getEmployeeDetail,
  getAllCompaniesWithEmployees,
};
