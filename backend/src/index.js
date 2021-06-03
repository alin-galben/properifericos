import app from './app';
import './database';
const sequelize = require ('./database');

app.listen(8000);
console.log('Server listen on port:', 8000);

sequelize.sync({force: false}).then(() => {
    console.log("############## DB connected successfully ##############");
}).catch(error => {
    console.log(error);
})
