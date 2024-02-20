const db = require("../config/db");
const config = require("../config/config");
const User = db.User;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

getUserById = async (req, res) => {
  try {
    res.status(200).json({ project: await User.findByPk(req.query.id) });
  } catch (error) {
    res.status(500).send("Failed to Fetch User Details");
  }
};

createUser = async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
      status: req.body.status,
    });

    res.status(200).send("Successfully Created User");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to Create User");
  }
};
// { where: { username: req.body.username } }
signIn = async (req, res) => {
  try {
    const user = await User.findOne({ where : {username : req.body.username}});
    if (bcrypt.compareSync(req.body.password,user.password)) {
    const tocken =  jwt.sign({ username: user.username },
        config.secretKey,
        {
          algorithm: 'HS256',
          allowInsecureKeySizes: true,
          expiresIn: config.jwtExpireTime, // 24 hours
        });
      return res.status(200).send(`SignIn Success with tocken ${tocken}`);
    }
    return res.status(500).send("Invalid Credentials");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to SignIn");
  }
};
module.exports = { getUserById, createUser, signIn };
