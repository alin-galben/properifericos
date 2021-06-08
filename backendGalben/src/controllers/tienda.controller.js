const db = require("../models");
const Tienda = db.tienda;

exports.createTienda = async (req, res) => {
    const {nombre, imagen} = req.body;  
    await Tienda.create({
        nombre: nombre,
        imagen: imagen
    })
    res.status(201).json( { mensaje: 'Tienda creada correctamente' });
}

exports.getTiendas = async (req, res) => {
    const productos = await Tienda.findAll();
    res.json(productos);
}

exports.getTiendaById = async (req, res) => {
    const producto = await Tienda.findByPk(req.params.id);
    res.json(producto);
}

exports.updateTiendaById = async (req, res) => {
    const {nombre, imagen} = req.body;
    await Tienda.update({
        nombre: nombre,
        imagen: imagen,
    },{
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Tienda actualizada correctamente' });
}

exports.deleteTiendaById = async (req, res) => {
    await Tienda.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Tienda eliminada' });
}
