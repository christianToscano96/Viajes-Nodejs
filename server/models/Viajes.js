const Sequialize = require('sequelize');

const db = require('../config/database');

const Viaje = db.define('Viaje', {
    titulo : {
        type: Sequialize.STRING
    },
    precio : {
        type: Sequialize.STRING
    },
    fecha_ida: {
        type: Sequialize.DATE
    },
    fecha_vuelta: {
        type: Sequialize.DATE
    },
    imagen : {
        type: Sequialize.STRING
    },
    descripcion: {
        type: Sequialize.STRING
    },
    disponibles: {
        type: Sequialize.STRING
    }

});

module.exports = Viaje;