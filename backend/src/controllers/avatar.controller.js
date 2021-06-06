const db = require("../models");
const Avatar = db.avatar;

exports.createAvatar = async (req, res) => {
    const {nombre, categoria, imagen} = req.body;  
    await Avatar.create({
        nombre: nombre,
        categoria: categoria,
        imagen: imagen
    })
    res.status(201).json( { mensaje: 'Avatar creado correctamente' });
}

exports.getAvatares = async (req, res) => {
    const avatares = await Avatar.findAll();
    res.json(avatares);
}

exports.getAvatarById = async (req, res) => {
    const avatar = await Avatar.findByPk(req.params.id);
    res.json(avatar);
}

exports.updateAvatarById = async (req, res) => {
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

exports.deleteAvatarById = async (req, res) => {
    await Avatar.destroy({
        where: {id: req.params.id}
    })
    res.status(201).json( { mensaje: 'Avatar eliminado' });
}
