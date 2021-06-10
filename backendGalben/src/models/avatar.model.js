module.exports = (sequelize, Sequelize) => {
    const Avatar = sequelize.define("avatares",{
        nombre: Sequelize.STRING,
        imagen: Sequelize.STRING
    });

    return Avatar;
}