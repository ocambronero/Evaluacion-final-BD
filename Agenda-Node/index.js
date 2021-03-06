
//CODIGO ORIGINAL DE SOLUCION
const http = require('http'),
      path = require('path'),
      Routing = require('./server/rutas.js'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

const PORT = 3000
const app = express()

const Server = http.createServer(app)

mongoose.connect('mongodb://localhost/agenda_db',
{ useNewUrlParser: true, useCreateIndex: true})

app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/users', Routing)

Server.listen(PORT, function() {
  console.log('Server is listeng on port: ' + PORT)
})
