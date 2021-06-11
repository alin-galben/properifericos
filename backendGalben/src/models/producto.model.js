module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("productos",{
        nombre: Sequelize.STRING,
        categoria: Sequelize.STRING,
        descripcion:  Sequelize.TEXT,
        imagen: Sequelize.STRING
    });

    return Producto;
}