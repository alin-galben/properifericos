module.exports = (sequelize, Sequelize) => {
    const Avatar = sequelize.define("avatares",{
        nombre: Sequelize.STRING,
        categoria: Sequelize.STRING,
        imagen: Sequelize.STRING
    });

    return Avatar;
}