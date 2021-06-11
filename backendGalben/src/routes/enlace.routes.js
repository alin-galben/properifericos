const { authJwt } = require("../middleware");
const controller = require("../controllers/enlace.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/enlaces', [authJwt.verifyToken, authJwt.isAdmin], controller.createEnlace);
  app.get('/enlaces', controller.getEnlaces);
  app.get('/enlaces/:id', controller.getEnlaceById);
  app.get('/enlaces/producto/:id', controller.getEnlacesById);
  app.delete('/enlaces/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteEnlaceById);
};