'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = function(sequelize, DataTypes){
  return dbMock.define('Rivet', {
    name: 'Groover',
    size: "12 inches",
    material: "incanel",
    capacity: "400 metric tons",
    description: "industrial grade rivet"
  })
}
