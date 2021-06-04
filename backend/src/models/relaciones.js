import Role from './Role';
import User from './User';

/*User.hasMany(Role, { as: "roles" });
Role.belongsTo(User, {
  foreignKey: "id",
  as: "roles",
});*/

Role.hasMany(User, {
  foreignKey: 'roles'
});
User.belongsToMany(Role)