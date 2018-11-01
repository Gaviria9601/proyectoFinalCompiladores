let mongoose = require('mongoose'); // ODM -> Object document mapping
let app = require('./app');
let port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/eam')
.then(() => {
app.listen(port, () => console.log('Corriendo en el puerto 3000'))
}).catch(err => console.log(err));