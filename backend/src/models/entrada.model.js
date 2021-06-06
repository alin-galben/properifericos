module.exports = (sequelize, Sequelize) => {
    const Entrada = sequelize.define("entradas",{
        titulo: Sequelize.STRING,
        categoria: Sequelize.STRING,
        texto:  Sequelize.TEXT,
        imagen: Sequelize.STRING
    });

    return Entrada;
}