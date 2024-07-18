const { Router } = require('express');
const router = Router();
const Gasto = require('../models/datos');

// Obtener todos los gastos
router.get('/', async (req, res) => { 
    try {
        const gastos = await Gasto.find();
        res.status(200).json(gastos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los gastos', error: error.message });
    }
});

// Crear un nuevo gasto
router.post('/', async (req, res) => {
    const { empresa, gasto, ruc, valor } = req.body;

    if (!empresa || !gasto || !ruc || !valor) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    const newGasto = new Gasto({ empresa, gasto, ruc, valor });

    try {
        const savedGasto = await newGasto.save();
        res.status(201).json(savedGasto);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el gasto', error: error.message });
    }
});

// Obtener un gasto por ID
router.get('/:id', async (req, res) => {
    try {
        const gasto = await Gasto.findById(req.params.id);
        if (!gasto) return res.status(404).json({ message: 'Gasto no encontrado' });
        res.status(200).json(gasto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el gasto', error: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedGasto = await Gasto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGasto) return res.status(404).json({ message: 'Gasto no encontrado' });
        res.status(200).json(updatedGasto);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el gasto', error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedGasto = await Gasto.findByIdAndDelete(req.params.id);
        if (!deletedGasto) return res.status(404).json({ message: 'Gasto no encontrado' });
        res.status(200).json({ message: 'Gasto eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el gasto', error: error.message });
    }
});

module.exports = router;