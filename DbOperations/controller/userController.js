const db = require("../config/db");
const User = db.User;

getUserById = async (req,res)=>{
    try {
        res.status(200).json({ project: await User.findByPk(req.query.id) });
      } catch (error) {
        res.status(500).send("Failed to Fetch User Details");
      }
}

createUser = async (req, res) => {
    try {
      await User.create({ name: req.body.name, username: req.body.username,password: req.body.password,status: req.body.status });
  
      res.status(200).send("Successfully Created User");
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to Create User");
    }
  };
  

module.exports = {getUserById,
    createUser}