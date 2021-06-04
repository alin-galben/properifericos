const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');


class User extends Model {}
User.init({
    username: {
        type: DataTypes.STRING,
        unique: true    
    },
    email:  {
        type: DataTypes.STRING,
        unique: true    
    },
    password:  {
        type: DataTypes.STRING,    
        allowNull: false
    },

    
}, { sequelize, modelName: 'user'});
    


module.exports = User;