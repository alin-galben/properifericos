const db = require("../models");
const Comentario = db.comentario;

exports.createComentario = async (req, res) => {
    const {texto} = req.body;  
    await Comentario.create({
        texto: texto,
    })
    res.status(201).json( { mensaje: 'Comentario creado correctamente' });
}

exports.getComentarios = async (req, res) => {
    const comentarios = await Comentario.findAll();
    res.json(comentarios);
}

exports.getComentarioById = async (req, res) => {
    const comentario = await Comentario.findByPk(req.params.id);
    res.json(comentario);
}

exports.updateComentarioById = async (req, res) => {
    const {texto} = req.body;
    await Comentario.update({
        text: text
    },{
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Comentario actualizado correctamente' });
}

exports.deleteComentarioById = async (req, res) => {
    await Comentario.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Comentario eliminado' });
}