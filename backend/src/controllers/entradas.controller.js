import Entrada from '../models/Entrada';

export const createEntrada = async (req, res) => {
    const {titulo, categoria, texto, imagen} = req.body;  
    await Entrada.create({
        titulo: titulo,
        categoria: categoria,
        texto: texto,
        imagen: imagen
    })
    res.status(201).json( { mensaje: 'Entrada creada correctamente' });
}

export const getEntradas = async (req, res) => {
    const entradas = await Entrada.findAll();
    res.json(entradas);
}

export const getEntradaById = async (req, res) => {
    const entrada = await Entrada.findByPk(req.params.id);
    res.json(entrada);
}

export const updateEntradaById = async (req, res) => {
    const {titulo, categoria, texto, imagen} = req.body;
    await Entrada.update({
        titulo: titulo,
        categoria: categoria,
        texto: texto,
        imagen: imagen
    },{
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Entrada actualizada correctamente' });
}

export const deleteEntradaById = async (req, res) => {
    await Entrada.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Entrada eliminada' });
}
