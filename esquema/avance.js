const mongoose = require('mongoose');
const {Schema} = mongoose;

const AvanceSchema = new Schema({
    idProyecto: {type:String, required:true},
    fecha: {type:String, required:true},
    descripcion: {type:String, required:true},
    observacion: {type:String, required:true},
    idEstudiante: {type:String, required:true},
    idLider: {type:String, required:true}
});

module.exports = mongoose.model('Avance', AvanceSchema) 