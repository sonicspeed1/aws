const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definimos el esquema para el impuesto
const ImpuestoSchema = new Schema({
    cedula: {
        type: String,
        required: true
    },
    ingreso: {
        type: Number,
        required: true
    },
    vivienda: {
        type: Number,
        required: true
    },
    educacion: {
        type: Number,
        required: true
    },
    salud: {
        type: Number,
        required: true
    },
    vestimenta: {
        type: Number,
        required: true
    },
    alimentacion: {
        type: Number,
        required: true
    },
    gastos: {
        type: Number,
        required: true
    },
    baseimponible: {
        type: Number,
        required: true
    },
    excedente: {
        type: Number,
        required: true
    },
    fraccionbasica: {
        type: Number,
        required: true
    },
    Porcentaje_Excedente: {
        type: Number,
        required: true
    },
    impuesto_fraccion_basica: {
        type: Number,
        required: true
    },
    impuesto_renta: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Impuesto', ImpuestoSchema);