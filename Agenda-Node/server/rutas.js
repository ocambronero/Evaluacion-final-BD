const Router = require('express').Router();
const Users = require('./model_user.js')
const Events = require('./model_event.js')

let MongoClient = require('mongodb').MongoClient,
    bcrypt = require('bcrypt-nodejs');

const url = 'mongodb://localhost/agenda_db';

let userId = "";

//Valida el usuarios
Router.post('/login', function(req, res) {
      MongoClient.connect(url, (err, db) => {

    Users.findOne({user:req.body.user}).exec(function(err, doc){
        if (doc === null){
          res.send("Usuario no existe")
        } else {

          userId = doc._id;

          if (bcrypt.compareSync(req.body.pass, doc.psw)){
            res.send("Validado")
          }else {
            res.send("Contraseña incorrecta")
          }
        }
      })
      db.close();
    });
});
//Consulta de los eventos de un usuario conectado
Router.get('/all', (req, res) => {

  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log('Base de Datos iniciada correctamente...');

      Events.find({userId:userId}).exec(function(err, doc){
      if (err) throw err;
      console.log('Eventos consultados correctamente...'); //, JSON.stringify(doc));

        res.send(doc)
      });
      db.close();
    })
});

// Agrega un nuevo evento del usuario conectado
Router.post('/new', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log('Base de Datos iniciada correctamente para AGREGAR...');

  Events.create({ title: req.body.title, start: req.body.start, end: req.body.end, userId: userId }, function (err, doc) {
if (err) throw(err);
res.json({doc: doc,id: doc.id,total: 1});
});
console.log('Eventos agregado correctamente...');

  db.close();
  });
})

//Actualizar evento
Router.post('/events/update/:id', (req, res) => {

  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log('Base de Datos iniciada correctamente para ACTUALIZAR...');

    Events.updateOne({_id: req.body.id},{$set:{start: req.body.ini, end: req.body.fin}}).exec(function(error) {
      if(error) {
          res.status(500)
          res.json(error)
      }
      res.send("Evento actualizado")
    });
    console.log('Evento actualizado correctamente...');
    db.close();
  });
});

// Eliminar un usuario por su id
Router.post('/events/delete/:id', function(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log('Base de Datos iniciada correctamente para ELIMINAR...');

    Events.deleteOne({_id: req.body.id}, function(error) {
        if(error) {
            res.json({error: error, n: 0});
        }
        res.json({error: error, n: 1});
    })
    console.log('Evento eliminado correctamente...');
    db.close();
  });
})

module.exports = Router
