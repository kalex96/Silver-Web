const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProyectosSchema = new Schema({
  nombre: { type: String, required: true },
  oGenerales: { type: String, required: true },
  oEspecificos: { type: String, required: true },
  presupuesto: { type: String, required: true },
  fechaInicio: { type: String, required: true },
  fechaFin: { type: String, required: true },
  idLider: { type: String, required: true },
  estado: { type: String, required: true },
  fase: { type: String, required: true }
});

module.exports = mongoose.model("Proyectos", ProyectosSchema);
