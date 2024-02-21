const db = require("../config/db");
const config = require("../config/config");
const User = db.User;
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).send({ auth: false, message: "Token expired." });
      }
      return res.status(500).send({ auth: false, message: "Unauthorized." });
    }

    req.username = decoded.username;
    next();
  });
};

const isAdmin = (req, res, next) => {
  User.findOne({ where: { username: req.username } }).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "Admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};

module.exports = { verifyToken, isAdmin };
