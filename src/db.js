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

const DB_URI_LOCAL = 'postgres://epazzmmmujrcdj:be59973b0c410221338c4f8a604cd86539dc35f25495aecbf8e086cb43530440@ec2-52-4-87-74.compute-1.amazonaws.com:5432/d22v7kq8qd7g63';

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