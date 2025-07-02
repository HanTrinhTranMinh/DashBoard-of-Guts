import './styles/App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sensor from './pages/Sensor.jsx';
import Camera from './pages/Camera.jsx';
import Home from './pages/Home.jsx';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleString('vi-VN', {
        weekday: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTimeString(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth'); 
    navigate('/');
  };

  return (
    <>
      <div className="timestamp">{timeString}</div>
      <div className="dashboard-container">
        <div className="sidebar">
          <div className="logo">
            <h1>Detect H2</h1>
            <p>Hệ thống giám sát công nghiệp</p>
          </div>

          <ul className="nav-menu">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                <span className="nav-icon">🏠</span>
                <span>Trang chủ</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sensor">
                <span className="nav-icon">🌡️</span>
                <span>Sensor</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="camera">
                <span className="nav-icon">📹</span>
                <span>Camera</span>
              </a>
            </li>
          </ul>
          <div className="logout-container">
            <button onClick={handleLogout} className="logout-link">
              🔓 Đăng xuất
            </button>
          </div>
        </div>

        <div className="main-content">
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/sensor" element={<Sensor />} />
              <Route path="/camera" element={<Camera />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
