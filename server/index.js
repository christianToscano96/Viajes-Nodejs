//importar express

const express = require('express');
const path = require('path');
const routes = require('./routes');

//configuacion
const configs = require('./config');


//configurar express
const app = express();

//habilitar pug
app.set('view engine', 'pug');
//añadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar una carpeta estatica llaada public 
app.use(express.static('public'));

//validar si estamos en desarrollo o produccion
const config = configs[app.get('env')];
//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

//muestra el año actual
app.use((req, res, next) => {
    //crear nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    return next();
})

//cargar las rutas
app.use('/', routes());


app.listen(3000);//puerto