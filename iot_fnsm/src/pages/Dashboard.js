import React, { useState, useEffect } from 'react';
import Notifications from '../components/Notification';
import SensorComponent from '../components/SensorComponent';
import IotList from '../components/IotList';
import '../styles/Dashboard.css';

function Dashboard() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);

    // Obtener el conteo de notificaciones desde la API
    useEffect(() => {
        fetch('http://localhost:5000/api/notificaciones')
            .then(response => response.json())
            .then(data => setNotificationCount(data.length))
            .catch(error => console.error('Error al obtener el conteo de notificaciones:', error));
    }, []);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const closeNotifications = () => {
        setShowNotifications(false);
    };

    return (
        <div className="dashboard-container" onClick={() => showNotifications && closeNotifications()}>
            <div className="notifications-toggle" onClick={(e) => e.stopPropagation()}>
                <button className="notifications-button" onClick={toggleNotifications}>
                    Ver Notificaciones {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}
                </button>
            </div>

            {showNotifications && (
                <div className="notifications-modal">
                    <button className="close-button" onClick={closeNotifications}>Cerrar</button>
                    <Notifications />
                </div>
            )}


            <div className="actions-section">
                <h2>Acciones Rápidas</h2>
                <div className="action-buttons">
                    <button onClick={() => alert('Sistema de riego activado')}>Prender Sistema de Riego</button>
                    <button onClick={() => alert('Puertas cerradas')}>Cerrar Puertas</button>
                    <button onClick={() => alert('Bocinas de música apagadas')}>Apagar Bocinas</button>
                    <button onClick={() => alert('Servicios de calidad de aire notificados')}>Llamar a Servicios (Calidad de Aire)</button>
                    <button onClick={() => alert('Seguridad notificada por alto sonido')}>Llamar a Seguridad (Sonido)</button>
                </div>
            </div>
            <SensorComponent />
            <div className="iot-sections">
                <h2>Puertas</h2>
                <IotList tipo="puerta" />
                <h2>Lámparas</h2>
                <IotList tipo="lámpara" />
                <h2>Bocinas</h2>
                <IotList tipo="bocina" />
                <h2>Rociadores</h2>
                <IotList tipo="rociador" />
                <h2>Ventiladores</h2>
                <IotList tipo="ventilador" />
                <h2>Pantallas</h2>
                <IotList tipo="pantalla" />
            </div>



        </div>
    );
}

export default Dashboard;
