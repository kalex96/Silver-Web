const mongoose = require('mongoose');
const { number } = require('prop-types');
const {Schema} = mongoose;

const UsuariosSchema = new Schema({
    correo: {type:String, required:true},
    identificacion: {type:String, required:true},
    nombre: {type:String, required:true}, 
    tipo: {type:String, required:true},
    password: {type:String, required:true},
    estado: {type:String, required:true},
    editBy: {type:String, required:false},
});

module.exports = mongoose.model('Usuarios', UsuariosSchema)