const mongoose = require('mongoose');

const alertaSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    mensaje: { type: String, required: true },
    nivel: { type: String, required: true }, // e.g., "advertencia", "alerta"
    activada: { type: Boolean, default: false },
    fecha_hora: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Alerta', alertaSchema);
