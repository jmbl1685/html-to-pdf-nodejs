'use strict'

const config = require('../config/config')
const pdf = require('html-pdf')
const requestify = require('requestify')
const data = require('../data/data').values

const ConvertBodyToPDF = async (req, res) => {

  let validate = req.body.data

  if (validate) {

    const request = await requestify.get(`http://${config.ip}:${config.port}/report`)
    const response = await request

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
    </style>`

    let htmlBody = `${head} ${response.body}`

    let htmlOptions = {
      format: 'Letter',
      border: '1cm'
    }

    let downloadPath = `${__dirname.split('controllers')[0]}/download/report.pdf`

    pdf.create(htmlBody, htmlOptions).toFile(downloadPath, (error, success) => {

      if (error)
        res.json({ data: error })
      else
        res.json({ data: success })

    })

  }

}

const JSON_Generate = (req, res) => {
  res.status(200).send(data)
}

module.exports = {
  ConvertBodyToPDF,
  JSON_Generate
}