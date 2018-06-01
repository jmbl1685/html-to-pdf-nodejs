'use strict'

const express = require('express')
const routes = express.Router()
const controller = require('../controllers/controller')
const fetch = require('node-fetch')
const config = require('../config/config')

let array = []

const GetData = (async () => {
  const request = await fetch(`http://${config.ip}:${config.port}/data`)
  const response = await request.json()
  array = response
})()

routes.post('/pdf', controller.ConvertBodyToPDF)
routes.get('/data', controller.JSON_Generate)

routes.get('/report', (req, res) => {
  res.render('index', { title: 'HTML to PDF', data: array })
})

routes.get('/', (req, res) => {
  res.redirect('/report')
})

module.exports = routes