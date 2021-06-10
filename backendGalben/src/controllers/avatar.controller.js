const db = require("../models");
const Avatar = db.avatar;
const fs = require("fs");

exports.subirAvatar = async (req, res) => {
    try {
      console.log(req.file);
  
      if (req.file == undefined) {
        return res.send(`You must select a file.`);
      }
      let url = "http://localhost:8000/img/"+req.file.filename
      Avatar.create({
        nombre: req.file.originalname,
        imagen: url,
      }).then((image) => {
        fs.writeFileSync(
          __basedir + "/resources/static/assets/tmp/" + image.nombre,
          image.imagen
        );
  
        return res.send(`Archivo subido.`);
      });
    } catch (error) {
      console.log(error);
      return res.send(`Error when trying upload images: ${error}`);
    }
  };

exports.createAvatar = async (req, res) => {
    const {nombre, imagen} = req.body; 
    await Avatar.create({
        nombre: nombre,
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
