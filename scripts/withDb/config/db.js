const config = require('./config.js');
const psql = require('pg');

const Sequelize = require("sequelize");

const db = {};


// create db if it doesn't already exist
const { dbhost, dbport, dbuser, dbpassword,database,dbdialect } = config.database;

 // connect to db
 const sequelize = new Sequelize(database, dbuser, dbpassword, {
  host: dbhost,
  dialect: dbdialect
});

( testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("\n<<<<<<<<<<<<<<<< Connection has been established successfully.>>>>>>>>>>>>>>>>>>>>>>>>>>\n");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

 db.Sequelize = Sequelize;
 db.sequelize = sequelize;
  
 
// init the Employee model and add it to the exported db object
db.Employee = require('../models/employee')(sequelize, Sequelize);
db.Profile = require('../models/profile')(sequelize, Sequelize);

db.Employee.hasOne(db.Profile,);
db.Profile.belongsTo(db.Employee);


// sync all models with database
sequelize.sync({alter : true});
module.exports=db;