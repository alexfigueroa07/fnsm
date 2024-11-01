import React, { useEffect, useState } from 'react';
import '../styles/AlertComponent.css';

function AlertComponent({ soloActivas = false }) {
    const [alertas, setAlertas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Llamada a la API para obtener los datos de alertas
        fetch('http://localhost:5000/api/alertas')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de las alertas');
                }
                return response.json();
            })
            .then(data => {
                setAlertas(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando datos de alertas...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    // Filtrar solo las alertas activas si se requiere
    const alertasAMostrar = soloActivas ? alertas.filter(alerta => alerta.activada) : alertas;

    return (
        <div className="alert-container">
            <h1>Al momento</h1>
            {alertasAMostrar.length > 0 ? (
                alertasAMostrar.map(alerta => (
                    <div key={alerta._id} className={`alert-card ${alerta.nivel}`}>
                        <h3>{alerta.tipo}</h3>
                        <p>{alerta.mensaje}</p>
                        <p><small>{new Date(alerta.fecha_hora).toLocaleString()}</small></p>
                    </div>
                ))
            ) : (
                <p>No hay alertas disponibles.</p>
            )}
        </div>
    );
}

export default AlertComponent;
