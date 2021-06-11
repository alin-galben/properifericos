const { authJwt } = require("../middleware");
const controller = require("../controllers/producto.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/productos', [authJwt.verifyToken, authJwt.isAdmin], controller.createProducto);
  app.get('/productos', controller.getProductos);
  app.get('/admin/productos', [authJwt.verifyToken, authJwt.isAdmin], controller.getProductos);
  app.get('/productos/:id', controller.getProductoById);
  app.put('/productos/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.updateProductoById);
  app.delete('/productos/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteProductoById);
  app.get('/productos/categoria/:categoria', controller.getProductosCategoria);
};