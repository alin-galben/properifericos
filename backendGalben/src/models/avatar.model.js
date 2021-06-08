module.exports = (sequelize, Sequelize) => {
    const Avatar = sequelize.define("avatares",{
        imagen: Sequelize.STRING
    });

    return Avatar;
}