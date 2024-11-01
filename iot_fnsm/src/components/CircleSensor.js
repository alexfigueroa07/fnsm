import React, { useEffect, useState } from 'react';
import '../styles/CircleSensor.css';

function CircleSensor({ tipoSensor }) {
    const [sensorData, setSensorData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/sensores')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de los sensores');
                }
                return response.json();
            })
            .then(data => {
                // Filtrar el sensor específico por tipo
                const sensorFiltrado = data.find(sensor => sensor.tipo.toLowerCase() === tipoSensor.toLowerCase());
                setSensorData(sensorFiltrado);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [tipoSensor]);

    if (loading) {
        return <p>Cargando {tipoSensor}...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!sensorData) {
        return <p>No hay datos para {tipoSensor}</p>;
    }

    return (
        <div className="circle-sensor">
            <h3>{sensorData.tipo}</h3>
            <h2>{sensorData.valor} {sensorData.unidad}</h2>
        </div>
    );
}

export default CircleSensor;
