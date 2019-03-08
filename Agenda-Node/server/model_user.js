const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = new Schema({
  user: { type: String, required: true },
  psw: { type: String, required: true},
  nombre: { type: String, required: true}
})

let UserModel = mongoose.model('Usuarios', UserSchema)

module.exports = UserModel
