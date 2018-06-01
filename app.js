'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')
const routes = require('./routes/routes')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, user, admin_secret");
  next();
});

app.set('views', 'views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.static('download'));
app.use(express.static('views/js'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

module.exports = app;
