'use strict'

// Módulos a requerir //
const express = require ('express'),
      app = require ('./app'),
      port = process.env.PORT || 3000;

// Inicialización del servidor //
app.listen(port, () => {
  console.log('Server started')
})