const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Entrada extends Model {}
Entrada.init({
    titulo: DataTypes.STRING,
    categoria: DataTypes.STRING,
    texto:  DataTypes.TEXT,
    imagen: DataTypes.STRING
}, { sequelize, modelName: 'entrada'});

module.exports = Entrada;