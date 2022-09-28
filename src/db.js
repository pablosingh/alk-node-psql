require('dotenv').config();
const Sequelize = require('sequelize');

const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_URI
  } = process.env;

// var db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   dialect: 'postgres',
// });

var db = new Sequelize(`${DB_URI}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialect: 'postgres',
  dialectOptions: {
    encrypt: true, // bool - true - doesn't work either
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});


module.exports = { db };