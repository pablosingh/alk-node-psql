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
const DB_URI_LOCAL = 'postgres://bbotuyiyyjgtfb:7b778e53c1fc4a11d58b267974bb00ad33b42656ffeff6909b7bede995e3ef11@ec2-35-168-122-84.compute-1.amazonaws.com:5432/d2e6f34g06tc59';

var db = new Sequelize(`${DB_URI_LOCAL}`, {
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