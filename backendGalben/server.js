const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/models");
const { avatar, tienda } = require("./src/models");
const app = express();
const Role = db.role;
const User = db.user;
const Avatar = db.avatar;
const Tienda = db.tienda;

var path = require('path');

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use('/img',express.static(path.join(__dirname, 'resources')));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
	res.json({message: 'Welcome'});
});

// Rutas
require('./src/routes/auth.routes')(app);
require('./src/routes/user.routes')(app);
require('./src/routes/producto.routes')(app);
require('./src/routes/avatar.routes')(app);
require('./src/routes/enlace.routes')(app);
require('./src/routes/entrada.routes')(app);
require('./src/routes/tienda.routes')(app);

global.__basedir = __dirname;

// Puerto del servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync({force: false}).then(() => {
  console.log("DB Connected");
}).catch(error => {
  console.log(error);
})

function initial() {
  Role.create({
    id: 1,
    nombre: "user"
  });
 
  Role.create({
    id: 2,
    nombre: "admin"
  });

  Avatar.create({
    nombre: "Avatar",
    imagen: "http://localhost:8000/img/1623340687204-properifericos-Cat_1.png"
  });

  Tienda.create({
    nombre: "PcComponentes",
    imagen: "https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg"
  });

  Tienda.create({
    nombre: "Amazon",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png"
  });

}
