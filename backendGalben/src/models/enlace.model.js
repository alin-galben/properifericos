module.exports = (sequelize, Sequelize) => {
    const Enlace = sequelize.define("enlaces",{
        enlace: Sequelize.STRING,
        precio: Sequelize.DECIMAL
    });

    return Enlace;
}