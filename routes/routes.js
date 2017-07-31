'use strict'

const express = require('express'),
  app = express(),
  routes = express.Router(),
  controller = require('../controllers/controller'),
  fetch = require('node-fetch');

let array = [];

// Consumir un API Rest, pueden utilizar el de su preferencia //

fetch('http://192.168.1.66:3000/data')
  .then(res => res.json())
  .then(res => { array = res })
  .catch( err => console.log('Error'))

// Endpoints //

routes.get('/', (req, res) => { res.redirect('/report') });

routes.get('/report', (req, res) => {
  res.render('index', {
    title: 'HTML to PDF',
    data: array
  });
});

routes.post('/pdf', controller.convertBodyToPDF);
routes.get('/data', controller.generateData)

module.exports = routes;

