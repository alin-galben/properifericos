const db = require("../models");
const User = db.user;

exports.getUsers = async (req, res) => {
    const productos = await User.findAll();
    res.json(productos);
}

exports.getUserById = async (req, res) => {
    const producto = await User.findByPk(req.params.id);
    res.json(producto);
}

exports.updateUserPasswordById = async (req, res) => {
    const {password} = req.body;
    await User.update({
        password: password
    },{
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Contraseña actualizada' });
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