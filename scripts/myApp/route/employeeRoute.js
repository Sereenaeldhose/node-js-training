
const express = require("express");
const router = express.Router();
// const bodyParser = require('body-parser');
// var urlEncoderParser =bodyParser.urlencoded({extended :false});

const employeeData = [
	{
  	id: 1,
  	firstName: "Davaraj",
  	lastName: "PD",
  	age: "18"
	},
	{
  	id: 2,
  	firstName: "Shivaraj",
  	lastName: "T",
  	age: "17"
	}
  ];

  // list all employees

router.get('/listEmp', (req,res)=>{
    console.log("Listing all employees..");
res.json(employeeData);
});

// get an employee using id
router.get('/getEmp', (req,res)=>{
    console.log("Returning Employee Details..");
   var empDetail = employeeData.find(emp => emp.id == req.query.empId);
    if(!empDetail){
        console.log("No Records Found...");
        res.send("No Records Found!");
    }   
    res.json(empDetail);
});

// add a new employee to the array

router.post('/saveEmp',  (req,res)=>{
    console.log(req.body);
   
    if(!req.body){
        console.log("Invalid Request Payload...");
        res.send("Invalid Request Payload");
    }
    var data = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    };
    employeeData.push(data)
    res.send("Employee Details Added Successfully!");
});

// delete an employee using id
router.delete('/removeEmp', (req,res)=>{
    if(!employeeData.find(emp => emp.id == req.query.empId)){
        console.log("No Records for Deletion!");
        res.send("No Records for Deletion!");
    }
    employeeData.splice(employeeData.findIndex(emp => emp.id == req.query.empId),1);
    console.log(`Successfully Removed Employee ${req.query.empId} !`);
    res.send(`Successfully Removed Employee ${req.query.empId} !`);
});

module.exports = router;
