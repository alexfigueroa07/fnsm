const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    hora_inicio: { type: Date, required: true },
    ubicacion: { type: String, required: true },
    detalles: { type: String },
});

module.exports = mongoose.model('Evento', eventoSchema);
