const db = require("../models");
const Avatar = db.avatar;

exports.createAvatar = async (req, res) => {
    const {imagen} = req.body;  
    await Avatar.create({
        imagen: imagen
    })
    res.status(201).json( { mensaje: 'Avatar subido correctamente' });
}

exports.getAvatares = async (req, res) => {
    const avatares = await Avatar.findAll();
    res.json(avatares);
}

exports.getAvatarById = async (req, res) => {
    const avatar = await Avatar.findByPk(req.params.id);
    res.json(avatar);
}

exports.deleteAvatarById = async (req, res) => {
    await Avatar.destroy({
        where: {id: req.params.id}
    })
    res.status(201).json( { mensaje: 'Avatar eliminado' });
}
