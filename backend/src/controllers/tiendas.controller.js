import Tienda from '../models/Tienda';

export const createTienda = async (req, res) => {
    const {nombre, imagen, enlace} = req.body;  
    await Tienda.create({
        nombre: nombre,
        imagen: imagen,
        enlace: enlace
    })
    res.status(201).json( { mensaje: 'Tienda creada correctamente' });
}

export const getTiendas = async (req, res) => {
    const productos = await Tienda.findAll();
    res.json(productos);
}

export const getTiendaById = async (req, res) => {
    const producto = await Tienda.findByPk(req.params.id);
    res.json(producto);
}

export const updateTiendaById = async (req, res) => {
    const {nombre, imagen, enlace} = req.body;
    await Tienda.update({
        nombre: nombre,
        imagen: imagen,
        enlace: enlace
    },{
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Tienda actualizada correctamente' });
}

export const deleteTiendaById = async (req, res) => {
    await Tienda.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Tienda eliminada' });
}
