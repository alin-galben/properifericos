const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Role extends Model {}
Role.init({
    nombre: {
        type: DataTypes.STRING
    },
}, { sequelize, modelName: 'roleSchema', timestamps: false});

User.hasMany(Role, {
    sourceKey: "id",
    foreignKey: {
      name: "roles",
      allowNull: true,
    },
    as: "roles",
  });

module.exports = Role;