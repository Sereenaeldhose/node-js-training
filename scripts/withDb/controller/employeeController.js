const db = require("../config/db");
const Employee = db.Employee;

async function getAllEmployees() {
  return await Employee.findAll();
}

async function getEmployee(id) {
  return await Employee.findByPk(id);
}

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
