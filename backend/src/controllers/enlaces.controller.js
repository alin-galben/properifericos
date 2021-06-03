import Enlace from '../models/Enlace';

export const createEnlace = async (req, res) => {
    const {enlace} = req.body;  
    await Enlace.create({
        enlace: enlace
    })
    res.status(201).json( { mensaje: 'Enlace creado correctamente' });
}

export const getEnlaces = async (req, res) => {
    const enlaces = await Enlace.findAll();
    res.json(enlaces);
}

export const getEnlaceById = async (req, res) => {
    const enlace = await Enlace.findByPk(req.params.id);
    res.json(enlace);
}

export const updateEnlaceById = async (req, res) => {
    const {enlace} = req.body;
    await Enlace.update({
        enlace: enlace
    },{
        where: {id: req.params.id}
    })
    res.status(201).json( { mensaje: 'Enlace actualizado correctamente' });
}

export const deleteEnlaceById = async (req, res) => {
    await Enlace.destroy({
        where: {id: req.params.id}
    })
    res.status(201).json( { mensaje: 'Enlace eliminado' });
}
