module.exports = (sequelize, Sequelize) => {
    const Comentario = sequelize.define("comentario",{
        texto:  Sequelize.TEXT
    });

    return Comentario;
}