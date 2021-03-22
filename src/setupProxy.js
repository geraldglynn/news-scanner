const aylien = require('./api/aylien')

module.exports = function(app){

var callback = function(error, data, response) {
  if (error) {
    response.status(200)
    response.send({ error: error.response })
  } else {
    response.status(200)
    response.send(data)
  }
};

  app.get('/stories', (req, res) => {
    aylien(callback, res)

    // api.listStories(opts, (error, data) => {
    //   callback(error, data, res)
    // })
  })
}