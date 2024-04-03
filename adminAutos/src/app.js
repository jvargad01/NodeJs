const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const unidades = require('./modulos/unidades/rutas');
const kilometraje= require('./modulos/kilometraje/kilometraje');
const mantenimiento= require('./modulos/manteniento/mantenimiento');

const error = require('./red/errors');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// config 
app.set('port', config.app.port);


// rutas 

app.use('/api/unidades', unidades);
app.use('/api/kilometraje', kilometraje);
app.use('/api/mantenimiento', mantenimiento);
app.use(error);

module.exports = app;