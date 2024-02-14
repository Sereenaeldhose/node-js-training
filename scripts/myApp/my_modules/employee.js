const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const employeeRoute = require('../route/employeeRoute')

// Starting the server
  app.listen(8080, () => {
	console.log("server is listening to port number 8080");
  });

  app.use(bodyParser.json());
  app.use('/emp',employeeRoute);


