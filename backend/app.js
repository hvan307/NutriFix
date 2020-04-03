const path = require('path')
const dist = path.join(__dirname, 'dist')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./router')
const { dbURI, port } = require('./config/environment')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },

  (err) => {
    if (err) console.log(err)
    else console.log('Mongoose connected!')
  })

const expressServer = express()

expressServer.use(bodyParser.json())


expressServer.use((req, res, next) => {
  console.log(`Incoming ${req.method} to ${req.url}`)
  next()
})

expressServer.use('/api', router)

expressServer.use('/', express.static(dist))

expressServer.get('*', function(req, res) {
  res.sendFile(path.join(dist, 'index.html'))
})

expressServer.listen(port)

module.exports = expressServer