const express = require('express');
const router = express.Router();

//importar el model
const Viaje = require('../models/Viajes');

module.exports = function() {
    router.get('/', (req, res) => {
        res.render('index');
    });

    router.get('/nosotros', (req, res) => {
        res.render('nosotros', {
            pagina: 'Sobre Nosotros'
        });
    });
    router.get('/viajes', (req, res) => {
        Viaje.findAll()
            .then(viajes => res.render('viajes', {
                pagina: 'Próximos Viajes',
                viajes
            }))
            .catch(error => clonsole.log(error))
    });

    return router;
}