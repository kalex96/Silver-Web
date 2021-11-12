const mongoose = require("mongoose");
const { number } = require("prop-types");
const { Schema } = mongoose;

const VentasSchema = new Schema({
  nombreCliente: { type: String, required: true },
  cedulaCliente: { type: String, required: true },
  nombreVendedor: { type: String, required: true },
  estadoVenta: { type: String, required: true },
  fechaVenta: { type: Date, required: true },
  valorVenta: { type: Number, required: true },
  descripcionVenta: { type: Array, required: true },
  updateTo: { type: Array, required: false }
});

module.exports = mongoose.model("Ventas", VentasSchema);
