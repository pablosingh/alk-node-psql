const { DataTypes } = require('sequelize');
const { db } = require('../db');

const Operation = db.define('operation', {
      id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      type:{
        type: DataTypes.STRING,
      },
      concept: {
        type: DataTypes.STRING
      },
      amount: {
          type: DataTypes.FLOAT,
      },
      dateOp:{
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false
    });

module.exports = Operation;