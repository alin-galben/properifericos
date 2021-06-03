const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Producto extends Model {}
Producto.init({
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    descripcion:  DataTypes.TEXT,
    imagen: DataTypes.STRING
}, { sequelize, modelName: 'producto'});

module.exports = Producto;