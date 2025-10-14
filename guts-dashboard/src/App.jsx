  import './styles/App.css';
  import { useEffect, useState } from 'react';
  import { Routes, Route, useNavigate } from 'react-router-dom';
  import Sensor from './pages/Sensor.jsx';
  import Camera from './pages/Camera.jsx';
  import Home from './pages/Home.jsx';
  import EmailTest from "./pages/EmailTest.jsx";

  import { FaBars, FaTimes, FaHome, FaThermometerHalf, FaVideo, FaSignOutAlt } from 'react-icons/fa';

  function App() {
    const navigate = useNavigate();
    const [timeString, setTimeString] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
      const updateTime = () => {
        const now = new Date();
        const time = now.toLocaleString('en-US', {
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

        {/* Nút toggle sidebar */}
        <button
          className={`sidebar-toggle ${isSidebarOpen ? 'open' : ''}`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="dashboard-container">
          <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <div className="logo">
              <h1>Detect H2</h1>
              <p>Industrial Monitoring System</p>
            </div>

            <ul className="nav-menu">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  <FaHome className="nav-icon" />
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sensor">
                  <FaThermometerHalf className="nav-icon" />
                  <span>Sensor</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/camera">
                  <FaVideo className="nav-icon" />
                  <span>Camera</span>
                </a>
              </li>
            </ul>

            <div className="logout-container">
              <button onClick={handleLogout} className="logout-link">
                <FaSignOutAlt className="nav-icon" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          <div className="main-content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/sensor" element={<Sensor />} />
              <Route path="/camera" element={<Camera />} />
              <Route path="/emailtest" element={<EmailTest />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }



  export default App;
