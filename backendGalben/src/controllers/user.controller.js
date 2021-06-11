const db = require("../models");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}

exports.getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
}

exports.updateUserAvatar = async (req, res) => {
    const {avatarId} = req.body;
    await User.update({
        avatarId: avatarId
    },{
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Avatar actualizado correctamente' });
}

exports.deleteUserById = async (req, res) => {
    await User.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Usuario eliminado' });
}

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
  
exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};
  
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};