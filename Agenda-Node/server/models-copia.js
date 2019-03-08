var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id: {type: Number, required: true, unique: true},
  email: {type: String, required: true, unique:true},
  psw: {type: String, required: true},
  nombre: {type: String, required: true},
  fecha_nacimiento: {type: String, required:true}
})

var User = mongoose.model('Usuarios', userSchema);

module.exports = User;
/*
var agendaSchema = new Schema({
  id: {type: Number, required: true},
  title: {type: String, required: true},
  start: {type: String, required: true},
  start_hour: {type: String, required: false},
  end: {type: String, required:false},
  end_hour: {type: String, required: false},
  allDay: {type: Boolean, required: false},
  fk_usuario: {type: Number, required:true}
})

var Agenda = agendaSchema.model('Agenda', agendaSchema);

module.exports = Agenda;
*/
