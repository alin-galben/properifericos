const { authJwt } = require("../middleware");
const controller = require("../controllers/tienda.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/tiendas', [authJwt.verifyToken, authJwt.isAdmin], controller.createTienda);
  app.get('/tiendas', controller.getTiendas);
  app.get('/tiendas/:id', controller.getTiendaById);
  app.put('/tiendas/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.updateTiendaById);
  app.delete('/tiendas/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteTiendaById);
};