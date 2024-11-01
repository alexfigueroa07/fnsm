const mongoose = require('mongoose');

const IotSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    ubicacion: { type: String, required: true },
    estado: { type: Boolean, required: true },
    ultima_actualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Iot', IotSchema);
