const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/models");
const app = express();
const Role = db.role;

var corsOptions = {
    origin: "http://localhost:4200"
};

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
}
