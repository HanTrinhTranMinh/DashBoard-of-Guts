import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

function Home() {

  // --- Camera Data ---
  const cameraData = [
    { name: 'Normal', value: 12 },
    { name: 'Anomaly', value: 3 }
  ];

  const cameraPieColors = ['#4CAF50', '#FF3B3B'];

  // --- Sensor Data ---
  const sensorData = [
    { name: 'Safe', value: 15 },
    { name: 'Warning', value: 5 }
  ];

  const sensorPieColors = ['#00C49F', '#FFBB28'];

  return (
    <div className="page active">
      <div className="page-header">
        <h1 className="page-title">System Overview</h1>
        <p className="page-subtitle">Real-time status and statistics from cameras & sensors</p>
      </div>

      {/* --- Summary Cards --- */}
      <div className="stats-container" style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        
        <div className="stat-card">
          <h3>Normal Frames</h3>
          <p className="stat-number">{cameraData[0].value}</p>
        </div>

        <div className="stat-card" style={{ background: '#ffe5e5' }}>
          <h3>Anomaly Frames</h3>
          <p className="stat-number">{cameraData[1].value}</p>
        </div>

        <div className="stat-card">
          <h3>Safe Sensor Readings</h3>
          <p className="stat-number">{sensorData[0].value}</p>
        </div>

        <div className="stat-card" style={{ background: '#fff6d5' }}>
          <h3>Warning Readings</h3>
          <p className="stat-number">{sensorData[1].value}</p>
        </div>
      </div>

      {/* --- Camera Charts --- */}
      <div className="chart-section">
        <h2>🔥 Thermal Camera Detection</h2>
        <p>Total frames processed: {cameraData[0].value + cameraData[1].value}</p>

        <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
          
          {/* Pie Chart */}
          <ResponsiveContainer width="40%" height={300}>
            <PieChart>
              <Pie
                data={cameraData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {cameraData.map((entry, index) => (
                  <Cell key={index} fill={cameraPieColors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Bar Chart */}
          <ResponsiveContainer width="60%" height={300}>
            <BarChart data={cameraData} margin={{ top: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>

      {/* --- Sensor Charts --- */}
      <div className="chart-section" style={{ marginTop: '60px' }}>
        <h2>🧪 Hydrogen Sensor Levels</h2>
        <p>Total sensor readings: {sensorData[0].value + sensorData[1].value}</p>

        <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
          
          {/* Pie Chart */}
          <ResponsiveContainer width="40%" height={300}>
            <PieChart>
              <Pie
                data={sensorData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {sensorData.map((entry, index) => (
                  <Cell key={index} fill={sensorPieColors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Bar Chart */}
          <ResponsiveContainer width="60%" height={300}>
            <BarChart data={sensorData} margin={{ top: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#00c49f" />
            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>

    </div>
  );
}

export default Home;
