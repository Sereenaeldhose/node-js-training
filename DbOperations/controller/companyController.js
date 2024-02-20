const db = require("../config/db");
const Employee = db.Employee;
const Company = db.Company;

//------------------------------
getAllCompanies = async (req, res) => {
  try {
    res.status(200).json({ companies: await Company.findAll() });
  } catch (error) {
    res.status(500).send("Failed to Fetch Companies");
  }
};

//------------------------------
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

//------------------------------
getCompanyDetail = async (req, res) => {
  try {
    res.status(200).json({ company: await Company.findByPk(req.query.id) });
  } catch (error) {
    res.status(500).send("Failed to Fetch Employee Details");
  }
};

//------------------------------
createCompany = async (req, res) => {
  try {
    await Company.create({ name: req.body.name, status: req.body.status });

    res.status(200).send("Successfully Created Company");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to Create Company");
  }
};

//------------------------------
createCompanyWithEmployees = async (req, res) => {
  try {
    const comp = await Company.create({
      name: req.body.name,
      status: req.body.status,
    });
    for (let emp of req.body.employees) {
      await Employee.create({
        name: emp.name,
        email: emp.email,
        designation: emp.designation,
        age: emp.age,
        companyId: comp.id,
      });
    }
    res.status(200).send("Successfully Created Company With Given Employees");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to Create Company");
  }
};

//------------------------------
updateCompany = async (req, res) => {
  try {
    const comp = await Company.findByPk(req.query.id);
    if (comp.length > 0) {
      await Company.update(
        { name: req.body.name, status: req.body.status },
        { where: { id: req.query.id } }
      );
      return res.status(200).send("Successfully Updated Company");
    }
    return res.status(200).send("No Records Found to Update");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to Update Company");
  }
};

//------------------------------
deleteCompany = async (req, res) => {
  try {
    const comp = await Company.findByPk(req.query.id);
    if (comp.length > 0) {
      await Company.destroy({ where: { id: req.query.id } });
    }
    return res.status(200).send("No Records Found to Destroy");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to Destroy Company");
  }
};

module.exports = {
  getAllCompanies,
  getCompanyDetail,
  getAllCompaniesWithEmployees,
  createCompany,
  updateCompany,
  deleteCompany,
  createCompanyWithEmployees,
};
