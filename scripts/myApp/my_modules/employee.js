const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const employeeRoute = require('../route/employeeRoute')


  app.listen(8080, () => {
	console.log("server is listening to port number 8080");
  });
  
  app.use('/emp',employeeRoute);
  app.use(bodyParser.json());

