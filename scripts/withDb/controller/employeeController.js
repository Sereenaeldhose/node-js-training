const db = require("../config/db");
const Employee = db.Employee;

async function getAllEmployees() {
  const employees = await Employee.findAll();

  return employees;
}

async function getEmployee(id) {
  console.log(id);
  return await Employee.findByPk(id);
}

async function createEmployee(emp) {
  console.log(emp);
  await Employee.create(emp);
  return getAllEmployees();
}

async function updateEmployee(id, body) {
    console.log("req == "+ body.id);
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
  console.log(id);
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
