const mongoose = require('mongoose');
const {Schema} = mongoose;

const InscripcionSchema = new Schema({
    idProyecto: {type:String, required:true},
    idEstudiante: {type:String, required:true},
    estado: {type:String, required:true},
    fechaIngreso: {type:String, required:true},
    fechaEgreso: {type:String, required:true}
});

module.exports = mongoose.model('Inscripcion', InscripcionSchema) 