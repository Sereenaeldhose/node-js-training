const express =require('express');
  const empRouter = express.Router();
  const empController = require("../controller/employeeController");
 empRouter.get('/', async (req, res)=>{
     try {
         const employees = await empController.getAllEmployees();
         res.status(200).json({employees: employees});
     } catch(e) {
         console.log(e);
         res.sendStatus(500);
     }
  });

  empRouter.post('/create', async (req, res)=>{
    try {
      console.log(req.body);
        var emp = {
          id:  req.body.id,
          name: req.body.name,
          email: req.body.email,
          designation : req.body.designation,
          age : req.body.age
        }
        const employees = await empController.createEmployee(emp);
        res.status(200).send(`Successfully Created Employee ${JSON.stringify(employees)}`);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
 });

 empRouter.get('/getEmp', async (req, res)=>{
  try {
    console.log(req.query.id);
      const employee = await empController.getEmployee(req.query.id);
      res.status(200).send(` ${employee!=null == true ? JSON.stringify(employee): "No Records Found!"}`);
  } catch(e) {
      console.log(e);
      res.sendStatus(500);
  }
});

empRouter.get('/updateEmp', async (req, res)=>{
  try {
    console.log(req.query.id);
    console.log(req.body);

      const employee = await empController.updateEmployee(req.query.id,req.body);
      res.status(200).send(` ${employee!=null == true ? "Successfully Updated Employee "+JSON.stringify(employee): "No Records Found!"}`);
  } catch(e) {
      console.log(e);
      res.sendStatus(500);
  }
});


empRouter.delete('/deleteEmp', async (req, res)=>{
  try {
    console.log(req.query.id);
      const employee = await empController.deleteEmployee(req.query.id);
      res.status(200).send(` ${employee!=null == true ? "Successfully Deleted Employee "+req.query.id: "No Records Found!"}`);
  } catch(e) {
      console.log(e);
      res.sendStatus(500);
  }
});

  module.exports = empRouter;