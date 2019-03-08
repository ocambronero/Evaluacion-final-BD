//Este código crea 3 usuarios en la base de datos Agenda_db
'use strict';

let MongoClient = require('mongodb').MongoClient,
    bcrypt = require('bcrypt-nodejs');

const url = 'mongodb://localhost/agenda_db';

//Creación del usuario ocambronero pass 12345
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log('Base de Datos AGENDA iniciada correctamente...');

    const Usuarios = db.collection('usuarios');

    Usuarios.findOne({user: 'ocambronero'}, (err, doc) => {
        if (err) throw err;

        if (doc) {
            console.log('Usuario registrado anteriormente');
        }
        else {
            let salt = bcrypt.genSaltSync();
            let password_hash = bcrypt.hashSync('12345', salt);
            Usuarios.insertOne({user: 'ocambronero', psw: password_hash, nombre:'Oscar Cambronero'}, (err, doc) => {
                if (err) throw err;
                console.log('usuario registrado correctamente...', JSON.stringify(doc));
            });
        }
        db.close();
    });
});
//Creación del usuario admin pass 12345
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const Usuarios = db.collection('usuarios');

        Usuarios.findOne({user: 'admin'}, (err, doc) => {
            if (err) throw err;

            if (doc) {
                console.log('Usuario registrado anteriormente');
            }
            else {
                let salt = bcrypt.genSaltSync();
                let password_hash = bcrypt.hashSync('12345', salt);
                Usuarios.insertOne({user: 'admin', psw: password_hash, nombre:'Usuario Administrador'}, (err, doc) => {
                    if (err) throw err;
                    console.log('usuario registrado correctamente...', JSON.stringify(doc));
              });
          }
          db.close();
      });
});
//Creación del usuario guest pass 12345
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const Usuarios = db.collection('usuarios');

        Usuarios.findOne({user: 'guest'}, (err, doc) => {
            if (err) throw err;

            if (doc) {
                console.log('Usuario registrado anteriormente');
            }
            else {
                let salt = bcrypt.genSaltSync();
                let password_hash = bcrypt.hashSync('12345', salt);
                Usuarios.insertOne({user: 'guest', psw: password_hash, nombre:'Usuario Guest'}, (err, doc) => {
                    if (err) throw err;
                    console.log('usuario registrado correctamente...', JSON.stringify(doc));
              });
          }
          db.close();
      });
});
