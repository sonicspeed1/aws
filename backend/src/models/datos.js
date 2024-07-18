const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de Gasto
const gastoSchema = new Schema({
    empresa: {
        type: String,
        required: true
    },
    gasto: {
        type: String,
        required: true
    },
    ruc: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
}, {
    timestamps: true // Añadir timestamps para createdAt y updatedAt
});

// Crear el modelo de Gasto
const Gasto = mongoose.model('Gasto', gastoSchema);

module.exports = Gasto;