const express = require("express");
const empRouter = express.Router();
const empController = require("../controller/employeeController");

empRouter.get("/", async (req, res) => {
  try {
    const employees = await empController.getAllEmployees();
    res.status(200).json({ employees: employees });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

empRouter.post("/create", async (req, res) => {
  try {
    const emp = ({ id, name, email, designation, age } = req.body);
    const employee = await empController.createEmployee(emp);
    res
      .status(200)
      .send(`Successfully Created Employee ${JSON.stringify(employee)}`);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

empRouter.get("/getEmp", async (req, res) => {
  try {
    const employee = await empController.getEmployee(req.query.id);
    res
      .status(200)
      .send(
        ` ${employee != null ? JSON.stringify(employee) : "No Records Found!"}`
      );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

empRouter.get("/updateEmp", async (req, res) => {
  try {
    const employee = await empController.updateEmployee(req.query.id, req.body);
    res
      .status(200)
      .send(
        ` ${
          employee != null
            ? "Successfully Updated Employee " + JSON.stringify(employee)
            : "No Records Found!"
        }`
      );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

empRouter.delete("/deleteEmp", async (req, res) => {
  try {
    const employee = await empController.deleteEmployee(req.query.id);
    res
      .status(200)
      .send(
        ` ${
          employee != null
            ? "Successfully Deleted Employee " + req.query.id
            : "No Records Found!"
        }`
      );
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = empRouter;
