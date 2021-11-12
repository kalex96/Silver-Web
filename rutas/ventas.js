const express = require('express');
const router = express.Router();

const Ventas = require('../esquema/ventas');

router.get('/', async (req, res) => {
    const ventas = await Ventas.find();
    res.json(ventas);
});

router.post('/', async (req, res) => {
    const {nombreCliente, cedulaCliente, nombreVendedor, estadoVenta, fechaVenta, valorVenta, descripcionVenta} = req.body;
    const venta = new Ventas({nombreCliente, cedulaCliente, nombreVendedor, estadoVenta, fechaVenta, valorVenta, descripcionVenta});
    await venta.save();
    res.json({status: 'Venta guardada'});
});

router.put('/:id', async (req, res) => {
    const {nombreCliente, cedulaCliente, nombreVendedor, estadoVenta, fechaVenta, valorVenta, descripcionVenta} = req.body;
    const nuevoProducto = {nombreCliente, cedulaCliente, nombreVendedor, estadoVenta, fechaVenta, valorVenta, descripcionVenta};
    await Ventas.findByIdAndUpdate(req.params.id, nuevoProducto);
    res.json({status: 'Venta actualizada'});
});

router.delete('/:id', async (req, res) => {
    await Ventas.findByIdAndRemove(req.params.id);
    res.json({status: 'Venta eliminada'});
});

router.get('/:id', async (req, res) => {
    const ventaxId = await Ventas.findById(req.params.id);
    res.json(ventaxId);
});

module.exports = router;