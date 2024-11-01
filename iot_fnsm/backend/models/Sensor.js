const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    ubicacion: { type: String, required: true },
    valor: { type: Number, required: true },
    unidad: { type: String, required: true },
    fecha_hora: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Sensore', sensorSchema);
