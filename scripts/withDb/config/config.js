const path = require("node:path");
const config = require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });
// module.exports = config;  -- need to take env values one by one whenever it is needed.
 

module.exports={
    port:process.env.PORT,
    database:{

        dbport:process.env.DB_PORT,
        dbhost:process.env.HOST,
        dbuser:process.env.USER,
        dbpassword:process.env.PASSWORD,
        database :process.env.DATABASE,
        dbdialect:process.env.dialect
       
    },
    pool: {
        max: process.env.MAX,
        min: process.env.MIN,
        acquire: process.env.ACQUIRE,
        idle: process.env.IDLE
      }
}