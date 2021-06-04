const express = require("express");
const cors = require("cors");
const db = require("./src/models");
const app = express();
const Role = db.role;

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
	res.json({message: 'Welcome'});
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync({force: true}).then(() => {
  console.log("DB Connected");
  initial();
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
