import Producto from '../models/Avatar';

export const createAvatar = async (req, res) => {
    const {nombre, categoria, imagen} = req.body;  
    await Avatar.create({
        nombre: nombre,
        categoria: categoria,
        imagen: imagen
    })
    res.status(201).json( { mensaje: 'Avatar creado correctamente' });
}

export const getAvatares = async (req, res) => {
    const avatares = await Avatar.findAll();
    res.json(avatares);
}

export const getAvatarById = async (req, res) => {
    const avatar = await Avatar.findByPk(req.params.id);
    res.json(avatar);
}

export const updateAvatarById = async (req, res) => {
    const {nombre, categoria, imagen} = req.body;
    await Avatar.update({
        nombre: nombre,
        categoria: categoria,
        imagen: imagen
    },{
        where: {id: req.params.id}
    })
    res.status(201).json( { mensaje: 'Avatar actualizado correctamente' });
}

export const deleteAvatarById = async (req, res) => {
    await Avatar.destroy({
        where: {id: req.params.id}
    })
    res.status(201).json( { mensaje: 'Avatar eliminado' });
}
