const { DataTypes } = require('sequelize');
const db = require('../db');
const user = require('./user');

const Operation = db.define('operation', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        // allowNull: false
    },
    type:{
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
    },
    balance: {
        type: DataTypes.FLOAT,
    },
    userbank: {
        type: DataTypes.INTEGER,
        references: {
            model: user,
            key: 'id'
            }
    }
  });

module.exports = Operation;