import '../styles/Sensor.css';
import { useEffect, useState } from 'react';
import { SensorModel } from '../model/sensor';
import SensorRow from '../components/SensorRow';
import axios from 'axios';

function Sensor() {

    const [sensor, setSensor] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "https://h2-api-z7sq.onrender.com/api/sensor/latest?deviceId=sensorcuakhai",
                    { headers: { "Cache-Control": "no-cache" } }
                );

                const sen = new SensorModel({
                    id: res.data.id,
                    deviceid: res.data.deviceId,
                    timestamp: res.data.timestamp,
                    ppm: res.data.hydrogenPpm,
                    alert: res.data.alertLevel
                });
                setSensor([sen]);

            } catch (err) {
                console.error("Cannot connect to server:", err);
            }
        };

        // chạy lần đầu
        fetchData();

        // cập nhật mỗi 1 giây
        const interval = setInterval(fetchData, 1000);

        return () => clearInterval(interval);

    }, []); // <--- KHÔNG ĐƯỢC dùng [sensor]

    const list = sensor.map((sensor) => (
        <SensorRow key={sensor.id} sensor={sensor} />
    ));

    return (
        <div id="overview" className="page active">
            <div className="page-header">
                <h1 className="page-title">Sensor Data</h1>
                <p className="page-subtitle">Detailed information of sensors today</p>
            </div>

            <div className="chart-container">
                <h3 style={{ marginBottom: "20px" }}>Today's Collected Data</h3>

                <table className="sensor-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Sensor ID</th>
                            <th>H2 (ppm)</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody id="sensorTableBody">
                        {list}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Sensor;
