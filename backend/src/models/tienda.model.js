module.exports = (sequelize, Sequelize) => {
    const Tienda = sequelize.define("tiendas",{
        nombre: Sequelize.STRING,
        imagen: Sequelize.STRING,
        enlace: Sequelize.STRING
    });

    return Tienda;
}