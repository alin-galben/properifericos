module.exports = (sequelize, Sequelize) => {
    const Enlace = sequelize.define("enlaces",{
        enlace: Sequelize.STRING,
    });

    return Enlace;
}