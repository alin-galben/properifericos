const { authJwt } = require("../middleware");
const controller = require("../controllers/entrada.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/entradas', [authJwt.verifyToken, authJwt.isAdmin], controller.createEntrada);
  app.get('/entradas', controller.getEntradas);
  app.get('/entradas/:id', controller.getEntradaById);
  app.put('/entradas/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.updateEntradaById);
  app.delete('/entradas/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteEntradaById);
};