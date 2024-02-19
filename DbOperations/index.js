const express = require("express");
const app = new express();
const config = require("./config/config");
const router =  require("./route/employeeRoute");
app.use(express.json());
app.use("/route",router);


const port = config.port
app.listen(port, () => {
  console.log(`Application is running at port ${port}`);
});
