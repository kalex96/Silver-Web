const mongoose = require('mongoose');
const {Schema} = mongoose;

const AvanceSchema = new Schema({
    idProyecto: {type:String, required:true},
    fecha: {type:Date, required:true},
    descripcion: {type:String, required:true},
    observacion: {type:String, required:true},
    idEstudiante: {type:String, required:true},
    idLider: {type:String, required:true}
});

const InscripcionesSchema = new Schema({
    idProyecto: {type:String, required:true},
    idEstudiante: {type:String, required:true},
    estado: {type:String, required:true},
    fechaIngreso: {type:Date, required:true},
    fechaEgreso: {type:Date, required:true}
});

const ProyectosSchema = new Schema({
    nombre: {type:String, required:true},
    oGenerales: {type:String, required:true},
    oEspecificos: {type:String, required:true},
    presupuesto: {type:String, required:true},
    fechaInicio: {type:Date, required:true},
    fechaFin: {type:Date, required:true},
    idLider: {type:String, required:true},
    estado: {type:String, required:true},
    fase: {type:String, required:true},
    estudiantes: {type:Array, required:true}, 
    avance: [AvanceSchema],
    inscripciones:[InscripcionesSchema] 
});

module.exports = mongoose.model('Proyectos', ProyectosSchema)