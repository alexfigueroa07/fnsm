const express = require('express');
const router = express.Router();
const Iot = require('../models/Iot');

// Obtener todos los dispositivos IoT
router.get('/iot', async (req, res) => {
    try {
        const dispositivos = await Iot.find();
        res.status(200).json(dispositivos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los dispositivos IoT', error });
    }
});

// Obtener un dispositivo IoT por ID
router.get('/iot/:id', async (req, res) => {
    try {
        const dispositivo = await Iot.findById(req.params.id);
        if (!dispositivo) return res.status(404).json({ message: 'Dispositivo no encontrado' });
        res.status(200).json(dispositivo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el dispositivo IoT', error });
    }
});

// Crear un nuevo dispositivo IoT
router.post('/iot', async (req, res) => {
    try {
        const nuevoDispositivo = new Iot(req.body);
        await nuevoDispositivo.save();
        res.status(201).json(nuevoDispositivo);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el dispositivo IoT', error });
    }
});

// Actualizar un dispositivo IoT
router.put('/iot/:id', async (req, res) => {
    try {
        const dispositivoActualizado = await Iot.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!dispositivoActualizado) return res.status(404).json({ message: 'Dispositivo no encontrado' });
        res.status(200).json(dispositivoActualizado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el dispositivo IoT', error });
    }
});

// Eliminar un dispositivo IoT
router.delete('/iot/:id', async (req, res) => {
    try {
        const dispositivoEliminado = await Iot.findByIdAndDelete(req.params.id);
        if (!dispositivoEliminado) return res.status(404).json({ message: 'Dispositivo no encontrado' });
        res.status(200).json({ message: 'Dispositivo eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el dispositivo IoT', error });
    }
});

module.exports = router;
