'use strict'

const config = require('./config/config')
const app = require ('./app')

app.listen(config.port, () => {
  console.log('Server started')
})