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
    console.error(">>>>>>>>>>>>>>>>  Unable to connect to the database: >>>>>>>>>>>>>>>>>>>>>>>>>>>> ", error);
  }
})();

 db.Sequelize = Sequelize;
 db.sequelize = sequelize;
  
 
// init the  models and add it to the exported db object
db.Company = require('../models/company')(sequelize, Sequelize);
db.Employee = require('../models/employee')(sequelize, Sequelize);
db.Project = require('../models/project.js')(sequelize,Sequelize);
db.User = require('../models/user.js')(sequelize,Sequelize);

db.Company.hasMany(db.Employee, {foreignKey: 'companyId'});
db.Employee.belongsTo(db.Company, {foreignKey: 'companyId'});

db.Employee.belongsToMany(db.Project, { through: 'employee_project' });
db.Project.belongsToMany(db.Employee, { through: 'employee_project' });

// sync all models with database
sequelize.sync({alter : true});
module.exports=db;