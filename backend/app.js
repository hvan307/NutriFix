const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('bodyParser')
const router = require('./router')

mongoose.connect(
  'mongodb://localhost/recipe-db',
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


expressServer.listen(8000)