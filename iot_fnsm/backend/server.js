require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Importa el paquete cors
const iotRoutes = require('./routes/iotRoutes');


const app = express();
connectDB();



// Middleware para JSON
app.use(express.json());

app.use(cors()); // Permitir todas las solicitudes desde cualquier origen


// Rutas (puedes añadir más rutas conforme avances)
app.get('/', (req, res) => {
    res.send('API de IoT en funcionamiento');
});
//Gestion de rutas
const sensorRoutes = require('./routes/routes');
app.use('/api', sensorRoutes);
// Usar las rutas de IoT
app.use('/api', iotRoutes);



// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
