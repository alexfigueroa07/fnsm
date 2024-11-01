import React, { useEffect, useState } from 'react';
import AlertComponent from "../components/AlertComponent";
import EventNotifications from "../components/EventComponent";
import CircleSensor from "../components/CircleSensor";
import { Link } from 'react-router-dom';
import '../styles/HomePublic.css'


function HomePublic() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-container">
            <div className="header">
                <h1>Jardín de San Marcos 2025</h1>

                <div className="clock">{currentTime}</div>
            </div>
            <div className="sensors">
                <CircleSensor tipoSensor="Calidad del Aire" />
                <CircleSensor tipoSensor="Afluencia de Personas" />
                <CircleSensor tipoSensor="Temperatura" />
                <CircleSensor tipoSensor="Luz" />
            </div>
            <div className="events">
                <EventNotifications />
            </div>
            <div className="alerts">
                <AlertComponent soloActivas={true} />
            </div>
        </div>
    );
}

export default HomePublic;