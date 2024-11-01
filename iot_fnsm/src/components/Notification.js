import React, { useEffect, useState } from 'react';
import '../styles/Notification.css';

function Notifications() {
    const [notificaciones, setNotificaciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Llamada a la API para obtener los datos de notificaciones
        fetch('http://localhost:5000/api/notificaciones')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de las notificaciones');
                }
                return response.json();
            })
            .then(data => {
                setNotificaciones(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando notificaciones...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="notifications-container">
            <h2>Notificaciones</h2>
            {notificaciones.length > 0 ? (
                notificaciones.map(notificacion => (
                    <div key={notificacion._id} className="notification-card">
                        <p className="notification-message">{notificacion.mensaje}</p>
                        <p className="notification-date">
                            {new Date(notificacion.fecha_hora).toLocaleString()}
                        </p>
                    </div>
                ))
            ) : (
                <p>No hay notificaciones disponibles.</p>
            )}
        </div>
    );
}

export default Notifications;
