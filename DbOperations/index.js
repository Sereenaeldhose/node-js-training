const express = require("express");
const app = new express();
const config = require("./config/config");
const empRouter = require("./route/employeeRoute");
const compRouter = require("./route/companyRoute");
const projectRouter = require("./route/projectRoute");
const userRouter = require("./route/userRoute");
const logger = require("./config/logger"); 

app.use(express.json());

app.use((req, res, done) => {
  logger.info("API request : " + req.originalUrl);
  done();
  if (res.statusCode != 200) {
    logger.error(
      `Failed to create response with Status Code ${res.statusCode}`
    );
  }
  logger.info("Successfully send response back to the caller!");
});
app.use("/emp", empRouter);
app.use("/comp", compRouter);
app.use("/project", projectRouter);
app.use("/user", userRouter);


const port = config.port;
app.listen(port, () => {
  console.log(`Application is running at port ${port}`);
});
