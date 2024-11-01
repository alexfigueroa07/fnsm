import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/NavBar';
import HomePublic from './pages/HomePublic';
import Login from './pages/Logn';
import SensorList from './pages/SensorList';


function App() {
  const location = useLocation();


  const hideNavbarRoutes = ['/HomePublic',];

  return (
    <div className="App">
      {/* Mostrar Navbar solo si la ruta actual no está en la lista de rutas donde debe ocultarse */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/HomePublic" element={<HomePublic />} />
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Sensor" element={<SensorList />} />
      </Routes>
    </div>
  );
}

export default App;
