import React, { useEffect, useState } from 'react';
import '../styles/Sensor.css';

function SensorComponent() {
    const [sensores, setSensores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Llamada a la API para obtener los datos de sensores
        fetch('http://localhost:5000/api/sensores')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de los sensores');
                }
                return response.json();
            })
            .then(data => {
                setSensores(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando datos de sensores...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="sensor-container">

            {sensores.map(sensor => (
                <SensorCard key={sensor._id} sensor={sensor} />
            ))}
        </div>
    );
}

function SensorCard({ sensor }) {
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

    return (
        <div className="sensor-card">
            <img src="https://www.freeiconspng.com/uploads/green-circle-icon-14.png" alt="Ícono de sensor" className="sensor-icon" />
            <h3>Tipo: {sensor.tipo}</h3>
            <p>Ubicación: {sensor.ubicacion}</p>
            <button onClick={() => setMostrarDetalles(prev => !prev)}>
                Ver Consumo
            </button>
            {mostrarDetalles && (
                <div className="sensor-details">
                    <p>Valor: {sensor.valor}</p>
                    <p>Unidad: {sensor.unidad}</p>
                    <p>Fecha y Hora: {new Date(sensor.fecha_hora).toLocaleString()}</p>
                </div>
            )}
        </div>
    );
}

export default SensorComponent;
