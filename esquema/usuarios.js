const mongoose = require('mongoose');
const { number } = require('prop-types');
const {Schema} = mongoose;

const UsuariosSchema = new Schema({
    correo: {type:String, required:true},
    nombre: {type:String, required:true}, 
    cargo: {type:String, required:true}
});

module.exports = mongoose.model('Usuarios', UsuariosSchema)