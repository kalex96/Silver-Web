const mongoose = require('mongoose');
const { number } = require('prop-types');
const {Schema} = mongoose;

const ProductosSchema = new Schema({
    descripcion: {type:String, required:true},
    precio: {type:Number, required:true}, 
    estado: {type:String, required:true}
});

module.exports = mongoose.model('Product', ProductosSchema)