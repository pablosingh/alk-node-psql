const { DataTypes } = require('sequelize');
const db = require('../db');

const user_bank = db.define('user_bank', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        // allowNull: false
    },
    username: {
        type: DataTypes.STRING,
    },
    balance: {
        type: DataTypes.FLOAT,
    },
  });

module.exports = user_bank;