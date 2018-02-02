'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rivet = sequelize.define('Rivet', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    material: DataTypes.STRING,
    capacity: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rivet;
};