const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Role extends Model {}
Role.init({
    nombre: {
        type: DataTypes.STRING
    },
}, { sequelize, modelName: 'roleSchema', timestamps: false});

module.exports = Role;