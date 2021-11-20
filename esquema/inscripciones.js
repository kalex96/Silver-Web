const mongoose = require('mongoose');
const { number } = require('prop-types');
const {Schema} = mongoose;

const InscripcionesSchema = new Schema({
    idProyecto: {type:String, required:true},
    idEstudiante: {type:String, required:true},
    estado: {type:String, required:true},
    fechaIngreso: {type:Date, required:true},
    fechaEgreso: {type:Date, required:true}
});

module.exports = mongoose.model('Inscripciones', InscripcionesSchema)