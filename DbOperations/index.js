const express = require("express");
const app = new express();
const config = require("./config/config");
const empRouter =  require("./route/employeeRoute");
const compRouter =  require("./route/companyRoute");

app.use(express.json());
app.use("/emp",empRouter);
app.use("/comp",compRouter);


const port = config.port
app.listen(port, () => {
  console.log(`Application is running at port ${port}`);
});
