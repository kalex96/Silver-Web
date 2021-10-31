const express = require('express');
const router = express.Router();

const Products = require('../esquema/productos');

router.get('/', async (req, res) => {
    const products = await Products.find();
    res.json(products);
});

router.post('/', async (req, res) => {
    const {descripcion, precio, estado} = req.body;
    const producto = new Products({descripcion, precio, estado});
    await producto.save();
    res.json({status: 'Producto guardado'});
});

router.put('/:id', async (req, res) => {
    const {descripcion, precio, estado} = req.body;
    const nuevoProducto = {descripcion, precio, estado};
    await Products.findByIdAndUpdate(req.params.id, nuevoProducto);
    res.json({status: 'Producto actualizado'});
});

router.delete('/:id', async (req, res) => {
    await Products.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto eliminado'});
});

router.get('/:id', async (req, res) => {
    const productoxId = await Products.findById(req.params.id);
    res.json(productoxId);
});

module.exports = router;