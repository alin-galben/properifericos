const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Avatar extends Model {}
Avatar.init({
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
    imagen: DataTypes.STRING
}, { sequelize, modelName: 'avatar'});

module.exports = Avatar;