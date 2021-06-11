const db = require("../models");
const Enlace = db.enlace;

exports.createEnlace = async (req, res) => {
    const {enlace, precio, productoId, tiendaId} = req.body;  
    await Enlace.create({
        enlace: enlace,
        precio: precio,
        productoId: productoId,
        tiendaId: tiendaId
    })
    res.status(201).json( { mensaje: 'Enlace creado correctamente' });
}

exports.getEnlaces = async (req, res) => {
    const enlaces = await Enlace.findAll();
    res.json(enlaces);
}

exports.getEnlaceById = async (req, res) => {
    const enlace = await Enlace.findByPk(req.params.id);
    res.json(enlace);
}

exports.deleteEnlaceById = async (req, res) => {
    await Enlace.destroy({
        where: {id: req.params.id}
    })
    res.status(201).json( { mensaje: 'Enlace eliminado' });
}
