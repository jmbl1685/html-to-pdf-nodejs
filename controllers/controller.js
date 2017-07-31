'use strict'

const pdf = require('html-pdf'),
  requestify = require('requestify'),
  externalURL = 'http://192.168.1.66:3000/report',
  data = require ('../data/data');

function convertBodyToPDF(req, res) {

  let validate = req.body.data;

  if (validate) {

    requestify.get(externalURL).then(function (response) {

      let head = `
    <head>
      <title>busy</title>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <link rel="stylesheet" href="https://semantic-ui.com/dist/semantic.min.css">
    </head>
    <style>
    #btn_pdf{ display: none }
    </style>
    `
      let html = head + response.body

      let options = {
        format: 'Letter',
        border: '1cm'
      };

      let _ruta = __dirname;
      let ruta = _ruta.split('controllers')

      pdf.create(html, options).toFile( ruta[0] + '/download/report.pdf', function (err, ok) {
        if (err) {
          res.json({
            data: 'error'
          })
        } else {
          res.json({
            data: 'success'
          })
        }
      });

    });

  } else {
    console.log('La data es inválida')
  }

}

function generateData(req, res) {

  // Esta data es de prueba para generar contenido en el HTML //

  res.status(200).send(data)
}

module.exports = {
  convertBodyToPDF,
  generateData
}