const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Enlace extends Model {}
Enlace.init({
    enlace: DataTypes.STRING,
}, { sequelize, modelName: 'enlace'});

module.exports = Enlace;