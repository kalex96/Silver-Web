const mongoose = require('mongoose');
const { number } = require('prop-types');
const {Schema} = mongoose;

const VentasSchema = new Schema({
    totalVenta: {type:Number, required:true},
    idProducto: {type:String, required:true},
    cantidad: {type:Number, required:true}, 
    precioUnitario: {type:Number, required:true},
    fechaVenta: {type:String, required:true},
    cedulaCliente: {type:String, required:true},
    nombreCliente: {type:String, required:true},
    idVendedor: {type:String, required:true}
});

module.exports = mongoose.model('Ventas', VentasSchema)