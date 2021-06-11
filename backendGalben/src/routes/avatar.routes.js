const { authJwt } = require("../middleware");
const controller = require("../controllers/avatar.controller");
const upload = require("../middleware/upload");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/avatares', [authJwt.verifyToken, authJwt.isAdmin], upload.single("file"), controller.subirAvatar);
  app.get('/avatares', controller.getAvatares);
  app.get('/avatares/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.getAvatares);
  app.get('/avatares/:id', controller.getAvatarById);
  app.delete('/avatares/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteAvatarById);
};