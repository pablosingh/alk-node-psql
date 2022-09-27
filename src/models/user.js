const { DataTypes } = require('sequelize');
const db = require('../db');

const User_bank = db.define('user_bank', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
    },
    balance: {
        type: DataTypes.FLOAT,
    },
  });

module.exports = User_bank;