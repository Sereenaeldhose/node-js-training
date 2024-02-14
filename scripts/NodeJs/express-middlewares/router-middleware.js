const express = require("express");
const app = express();
const router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

// a middleware function with error
router.use((err,req, res, next) => {
    console.error(err);
    next();
  });

router.get("/", (req, res) => {
  console.log("Inside 'route/' ");
  res.send("Routed Successfully!")
});


router.get("/user", (req, res) => {
    console.log(req.originalUrl);
    if(req.originalUrl === '/route/user'){
        throw "ACCESS DENIED";
    }
  
  });


module.exports = router;
