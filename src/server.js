const express = require('express')
const path = require('path')
const app = express()
const aylien = require('./api/aylien')

app.use(express.static(path.join(__dirname, 'build')))

app.get('/stories', (req, res) => {
  const callback = function(error, data, response) {
    if (error) {
      response.status(200)
      response.send({ error: error.response })
    } else {
      response.status(200)
      response.send(data)
      console.log(data)
    }
  }

  aylien.fetchStories(callback, res)
})

app.get('/autocomplete', (req, res) => {
  const queries = req.query
  aylien.autocomplete(callback, res)
})

app.listen(process.env.PORT || 4000)
