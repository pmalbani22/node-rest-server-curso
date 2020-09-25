//
//
require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

//middlewares
app.use(express.urlencoded({ extended: false })); //le permite a mi servidor entender datos de formularios 
app.use(express.json()); //le permite a mi servidor recibir formato json
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())

//Publicar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

//configuración global de rutas
app.use(require('./routes/index'))


mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('Base de datos ONLINE'))
    .catch(erro => console.log('No se ha conectado a la Base de Datos'))

//conectando a la base de datos
// mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
//     (err, res) => {

//         if (err) {
//             throw err;
//         }

//         console.log('Base de datos ONLINE');

//     });

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto ', process.env.PORT);
})