import Producto from '../models/Producto';

export const createProducto = async (req, res) => {
    const {nombre, categoria, precio, descripcion, imagen} = req.body;  
    await Producto.create({
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        descripcion: descripcion,
        imagen: imagen
    })
    res.status(201).json( { mensaje: 'Producto creado correctamente' });
}

export const getProductos = async (req, res) => {
    const productos = await Producto.findAll();
    res.json(productos);
}

export const getProductoById = async (req, res) => {
    const producto = await Producto.findByPk(req.params.id);
    res.json(producto);
}

export const updateProductoById = async (req, res) => {
    const {nombre, categoria, precio, descripcion, imagen} = req.body;
    await Producto.update({
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        descripcion: descripcion,
        imagen: imagen
    },{
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Producto actualizado correctamente' });
}

export const deleteProductoById = async (req, res) => {
    await Producto.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json( { mensaje: 'Producto eliminado' });
}
