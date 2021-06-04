import Role from '../models/Role'

export const getRoles = async (req, res) => {
    const roles = await Roles.findAll();
    res.json(roles);
}

export const createRole = async (req, res) => {
    const {nombre} = req.body;  
    await Tienda.create({
        nombre: nombre
    })
    res.status(201).json( { mensaje: 'Rol Creado' });
}