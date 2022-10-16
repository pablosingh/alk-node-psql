const Operation = require('./Operation.js');
const { DataTypes } = require('sequelize');
const { db } = require('../db');

const Person = db.define('person', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        balance: {
            type: DataTypes.FLOAT,
        }
    },
    {
      timestamps: false
    }
);

Person.hasMany(Operation, {
    foreinkey: "personId",
    sourceKey: "id",
  });
  
Operation.belongsTo(Person, { 
    foreinkey: "personId", 
    targetId: "id" 
});

module.exports = Person;