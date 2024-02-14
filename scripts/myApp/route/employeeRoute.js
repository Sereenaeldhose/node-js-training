const express = require("express");
const router = express.Router();

const employeeData = [
  {
    id: 1,
    firstName: "Davaraj",
    lastName: "PD",
    age: "18",
  },
  {
    id: 2,
    firstName: "Shivaraj",
    lastName: "T",
    age: "17",
  },
];

// list all employees

router.get("/listEmp", (req, res) => {
  console.log("Listing all employees..");
  res.json(employeeData);
});

// get an employee using id
router.get("/getEmp", (req, res) => {
  console.log("Returning Employee Details..");
  var empDetail = employeeData.find((emp) => emp.id == req.query.empId);
  if (!empDetail) {
    console.log("No Records Found...");
    res.send("No Records Found!");
    return;
  }
  res.json(empDetail);
});

// add a new employee to the array

router.post("/saveEmp", (req, res) => {
  if (!req.body || req.body === undefined) {
    console.log("Invalid Request Payload...");
    res.send("Invalid Request Payload");
    return;
  }
  if (employeeData.find((emp) => emp.id == req.body.id)) {
    res.send("An entry with the same id is already exists!");
    return;
  }
  var data = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  };
  employeeData.push(data);
  res.send("Employee Details Added Successfully!");
});

// update an employee
router.put("/updateEmp", (req, res) => {
  empDetail = employeeData.find((emp) => emp.id == req.query.empId);
  if (!empDetail) {
    console.log("No Records for Update!");
    res.send("No Records for Update!");
    return;
  }
  if (!req.body || req.body === undefined) {
    console.log("Invalid Request Payload...");
    res.send("Invalid Request Payload");
    return;
  }
  empDetail.firstName = req.body.firstName;
  empDetail.lastName = req.body.lastName;
  empDetail.age = req.body.age;
  employeeData[employeeData.findIndex((emp) => emp.id == req.query.empId)] =
    empDetail;
  res.send("Employee Details Added Successfully!");
});

// delete an employee using id
router.delete("/removeEmp", (req, res) => {
  if (!employeeData.find((emp) => emp.id == req.query.empId)) {
    console.log("No Records for Deletion!");
    res.send("No Records for Deletion!");
    return;
  }
  employeeData.splice(
    employeeData.findIndex((emp) => emp.id == req.query.empId),
    1
  );
  console.log(`Successfully Removed Employee ${req.query.empId} !`);
  res.send(`Successfully Removed Employee ${req.query.empId} !`);
});

module.exports = router;
