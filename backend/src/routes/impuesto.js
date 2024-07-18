const express = require('express');
const router = express.Router();
const Impuesto = require('../models/impuesto');

// Obtener todos los impuestos
router.get('/', async (req, res) => {
    try {
        const impuestos = await Impuesto.find();
        res.status(200).json(impuestos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los impuestos', error: error.message });
    }
});

// Crear un nuevo impuesto
router.post('/', async (req, res) => {
    const { cedula, ingreso, vivienda, educacion, salud, vestimenta, alimentacion, gastos, baseimponible, excedente, fraccionbasica, Porcentaje_Excedente, impuesto_fraccion_basica, impuesto_renta } = req.body;

    if (!cedula || !ingreso || !vivienda || !educacion || !salud || !vestimenta || !alimentacion || !gastos || !baseimponible || !excedente || !fraccionbasica || !Porcentaje_Excedente || !impuesto_fraccion_basica || !impuesto_renta) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    const newImpuesto = new Impuesto({ cedula, ingreso, vivienda, educacion, salud, vestimenta, alimentacion, gastos, baseimponible, excedente, fraccionbasica, Porcentaje_Excedente, impuesto_fraccion_basica, impuesto_renta });

    try {
        const savedImpuesto = await newImpuesto.save();
        res.status(201).json(savedImpuesto);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el impuesto', error: error.message });
    }
});

// Obtener un impuesto por ID
router.get('/:id', async (req, res) => {
    try {
        const impuesto = await Impuesto.findById(req.params.id);
        if (!impuesto) return res.status(404).json({ message: 'Impuesto no encontrado' });
        res.status(200).json(impuesto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el impuesto', error: error.message });
    }
});

// Actualizar un impuesto por ID
router.put('/:id', async (req, res) => {
    try {
        const updatedImpuesto = await Impuesto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedImpuesto) return res.status(404).json({ message: 'Impuesto no encontrado' });
        res.status(200).json(updatedImpuesto);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el impuesto', error: error.message });
    }
});

// Eliminar un impuesto por ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedImpuesto = await Impuesto.findByIdAndDelete(req.params.id);
        if (!deletedImpuesto) return res.status(404).json({ message: 'Impuesto no encontrado' });
        res.status(200).json({ message: 'Impuesto eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el impuesto', error: error.message });
    }
});

module.exports = router;