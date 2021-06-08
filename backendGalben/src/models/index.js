const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.producto = require("../models/producto.model.js")(sequelize, Sequelize);
db.avatar = require("../models/avatar.model.js")(sequelize, Sequelize);
db.enlace = require("../models/enlace.model.js")(sequelize, Sequelize);
db.entrada = require("../models/entrada.model.js")(sequelize, Sequelize);
db.tienda = require("../models/tienda.model.js")(sequelize, Sequelize);
db.comentario = require("../models/comentario.model.js")(sequelize, Sequelize);

// Usuario - Rol
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// Producto - Enlace
db.producto.hasMany(db.enlace, {
  foreignKey: "productoId",
  as: "enlace",
  onDelete: 'CASCADE'
});

db.enlace.belongsTo(db.producto, {
  foreignKey: "productoId",
  as: "producto"
});

// Usuario - Avatar
db.avatar.hasMany(db.user, {
  foreignKey: "avatarId",
  as: "user"
})

db.user.belongsTo(db.avatar, {
  foreignKey: "avatarId",
  as: "avatar"
})

// Tienda - Enlace
db.tienda.hasMany(db.enlace, {
  foreignKey: "tiendaId",
  as: "enlace"
})

db.enlace.belongsTo(db.tienda, {
  foreignKey: "tiendaId",
  as: "tienda"
})

// Usuario - Entrada
db.user.hasMany(db.entrada, {
  foreignKey: "userId",
  as: "entrada"
})

db.entrada.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user"
})

// Usuario - Comentario
db.user.hasMany(db.comentario, {
  foreignKey: "userId",
  as: "comentario"
})

db.comentario.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user"
})

// Entrada - Comentario
db.entrada.hasMany(db.comentario, {
  foreignKey: "entradaId",
  as: "comentario"
})

db.comentario.belongsTo(db.entrada, {
  foreignKey: "entradaId",
  as: "entrada"
})

db.ROLES = ["user", "admin"];

module.exports = db;