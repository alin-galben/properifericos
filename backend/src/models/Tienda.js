const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Tienda extends Model {}
Tienda.init({
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    enlace: DataTypes.STRING
}, { sequelize, modelName: 'tienda'});

module.exports = Tienda;