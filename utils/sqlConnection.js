const Sequelize = require('sequelize');
const dbConfig = require("../config/db");

const sequelize = new Sequelize(
   dbConfig.database,
   dbConfig.username,
   dbConfig.password,
   {
      dialect: 'mysql',
      host: dbConfig.host,
      define: {
         timestamps: false
      }
   }
);

module.exports = sequelize;