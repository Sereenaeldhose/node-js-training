const express = require("express");
const app = express();
const router = require("./router-middleware");

app.use("/route", router);

app.listen(8000);
// define logger globally
app.use(logger);

app.get("/", (req, res) => {
  console.log("Inside Home Page");
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  console.log("About Page");
  res.send("About Page");
});

function logger(req, res, next) {
  console.log("Before Execution - Logger");
  next();
  console.log("After Execution - Logger");
}

// ------------------------------------
// ------------------------------------

// define auth in between

app.get("/first", (req, res) => {
  console.log("First Page");
  res.send("First Page");
});

// define auth in between
app.use(sample);

app.get("/second", (req, res) => {
  console.log("Second Page");
  res.send("Second Page");
});

function sample(req, res, next) {
  console.log("Before Execution - Sample");
  next();
  console.log("After Execution - Sample");
}

// ------------------------------------
// ------------------------------------

// define auth inside a req
//app.use(auth);

app.get("/admin", (req, res) => {
  console.log(req.originalUrl);

  console.log("Admin Page");
  res.send("Admin Page");
});

app.get("/user", (req, res) => {
  console.log(req.originalUrl);

  console.log("Inside User Page");
  res.send("User Page");
});

function auth(req, res, next) {
  console.log("Before Execution - Auth");
  console.log(req.originalUrl);
  if (req.originalUrl === "/admin") {
    next();
    return;
  }
  res.send("Access Denied!");
  console.log("After Execution - Auth");
}
