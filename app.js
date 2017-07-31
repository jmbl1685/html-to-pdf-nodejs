'use strict'

// Módulos a requerir //
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      ejs = require('ejs'),
      routes = require ('./routes/routes');

// Carpeta donde se encuentran las vistas (views) //
app.set('views', 'views');

// Renderizado de EJS a HTML //
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// Carpeta pública en el servidor //
app.use(express.static('download'));

// Parseo de la data del body a JSON //
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',routes);

module.exports = app;
