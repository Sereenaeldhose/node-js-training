const db = require("../config/db");
const config = require("../config/config");
const User = db.User;
const Role = db.Role;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const logger = require("../config/logger.js"); 

getUserById = async (req, res) => {
  try {
    res.status(200).json({ project: await User.findByPk(req.query.id) });
  } catch (error) {
    logger.error("Failed to Fetch User Details",error);
    res.status(500).send("Failed to Fetch User Details");
  }
};

createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
      status: req.body.status,
    });
    if (req.body.roleId) {
      const role = await Role.findByPk(req.body.roleId);
      user.setRoles(role);
      logger.info("New User Created With Role "+ role.name);
    } else {
      user.setRoles(2); // default role
      logger.info("New User Created With Role User ");
    }
    res.status(200).send("Successfully Created User");
  } catch (error) {
    logger.error("Failed to Create User",error);
    res.status(500).send("Failed to Create User");
  }
};

//---------------------
signIn = async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ username: user.username }, config.secretKey, {
        algorithm: "HS256",
        allowInsecureKeySizes: true,
        expiresIn: config.jwtExpireTime, // 24 hours
      });

      // Get user's roles and create an array of authorities
      const authorities = [];
      const roles = await user.getRoles();
      for (const role of roles) {
        authorities.push("ROLE_" + role.name.toUpperCase());
      }

      // Send the response with user details and token
      return res.status(200).send({
        id: user.id,
        email: user.email,
        roles: authorities,
        accessToken: token,
      });
    }
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Credentials!",
    });
  } catch (error) {
    logger.error("Failed to SignIn",error);
    res.status(500).send("Failed to SignIn");
  }
};
module.exports = { getUserById, createUser, signIn };
