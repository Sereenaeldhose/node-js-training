const db = require("../config/db");
const Employee = db.Employee;
const Profile = db.Profile;

async function getAllEmployees() {
  return await Employee.findAll();
}

async function getEmployee(id) {
  // return await Employee.findByPk(id);
  const employee = await Employee.findByPk(id, {
    include: [
      {
        model: Profile,
        attributes: ["status", "mobile"],
      },
    ],
  });

  return employee;
}

// another method to call the fn using route
getEmployeeDetail = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.query.id, {
      include: [
        {
          model: Profile,
          attributes: ["status", "mobile"],
        },
      ],
    });
    res
      .status(200)
      .send(
        ` ${employee != null ? JSON.stringify(employee) : "No Records Found!"}`
      );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

async function createEmployee(emp) {
  await Employee.create(emp);
  return getEmployee(emp.id);
}

async function updateEmployee(id, body) {
  var employee = await getEmployee(id);
  if (employee != null) {
    employee.set({
      id: body.id,
      name: body.name,
      email: body.email,
      designation: body.designation,
      age: body.age,
    });
    await employee.save();
    return getEmployee(employee.id);
  }
  return null;
}

async function deleteEmployee(id) {
  const employee = await getEmployee(id);
  if (employee != null) {
    return await employee.destroy();
  }
  return null;
}

module.exports = {
  getAllEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
