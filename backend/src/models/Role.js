const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');


class Role extends Model {}
Role.init({
    nombre: {
        type: DataTypes.STRING
    },
}, { sequelize, modelName: 'roles', timestamps: false});



module.exports = Role;