import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home() {
  const cameraData = [
    { name: 'Normal', value: 12 },
    { name: 'Anomaly', value: 3 }
  ];

  const sensorData = [
    { name: 'Safe', value: 15 },
    { name: 'Warning', value: 5 }
  ];

  return (
    <div className="page active">
      <div className="page-header">
        <h1 className="page-title">System Overview</h1>
        <p className="page-subtitle">Real-time status and warnings from camera and sensors</p>
      </div>

      <div className="chart-section">
        <h2>🔥 Thermal Camera (Anomaly Detection)</h2>
        <p style={{ marginBottom: '10px' }}>Shows how many thermal frames were detected as normal or abnormal.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cameraData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section" style={{ marginTop: '40px' }}>
        <h2>🧪 Hydrogen Sensor (Warning Levels)</h2>
        <p style={{ marginBottom: '10px' }}>Displays the number of safe vs. warning-level hydrogen readings.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sensorData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#00c49f" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Home;
