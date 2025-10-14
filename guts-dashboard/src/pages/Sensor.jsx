// import '../styles/Sensor.css';
// import { useEffect, useState } from 'react';
// import { SensorModel } from '../model/sensor';
// import SensorRow from '../components/SensorRow';
// import axios from 'axios';


// function Sensor() {
//     const [sensor, setSensor] = useState([]);

//     useEffect(() => {
//     axios.get("https://h2-api-z7sq.onrender.com/api/sensor/latest?deviceId=sensorcuakhai")

//       .then(res => {
//         console.log("Data:", res.data);
//         const sen = new SensorModel({
//             id : res.data.id,
//             deviceid : res.data.deviceId,
//             timestamp : res.data.timestamp,
//             ppm : res.data.hydrogenPpm,
//             alert : res.data.alertLevel
//         });
//         setSensor([sen]); 
//       })
//       .catch(err => {
//         console.error("Cannot connect to server:", err);
//       });
//   }, [sensor]);

//     const list = sensor.map((sensor) => {
//         return (
//             <SensorRow key={sensor.id} sensor={sensor} />
//         )
//     })

//     return (
//         <div id="overview" class="page active">
//             <div class="page-header">
//                 <h1 class="page-title">Sensor Data</h1>
//                 <p class="page-subtitle">Detailed information of sensors today</p>
//             </div>

//             <div class="chart-container">
//                 <h3 style={{"margin-bottom": "20px"}}>Today's Collected Data</h3>
//                 <table class="sensor-table">
//                         <thead>
//                             <tr>
//                                 <th>Time</th>
//                                 <th>Sensor ID</th>
//                                 <th>H2 (ppm)</th>
//                                 <th>Status</th>
//                             </tr>

//                         </thead>
//                     <tbody id="sensorTableBody">
//                         {list}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Sensor;


import '../styles/Sensor.css';
import { useEffect, useState } from 'react';
import { SensorModel } from '../model/sensor';
import SensorRow from '../components/SensorRow';
import axios from 'axios';
import emailjs from 'emailjs-com';

function Sensor() {
  const [sensor, setSensor] = useState([]);
  const [lastAlert, setLastAlert] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://h2-api-z7sq.onrender.com/api/sensor/latest?deviceId=sensorcuakhai")
        .then(res => {
          const sen = new SensorModel({
            id: res.data.id,
            deviceid: res.data.deviceId,
            timestamp: res.data.timestamp,
            ppm: res.data.hydrogenPpm,
            alert: res.data.alertLevel
          });

          setSensor([sen]);

          // 🔔 Nếu alert thay đổi và là "Leak Detected" → gửi Gmail
          if (sen.alert === "Leak Detected" && sen.alert !== lastAlert) {
            sendLeakEmail(sen);
            setLastAlert(sen.alert);
          }

          // reset khi hết cảnh báo
          if (sen.alert === "Normal" && lastAlert !== "Normal") {
            setLastAlert("Normal");
          }

        })
        .catch(err => console.error("Cannot connect to server:", err));
    }, 5000); // refresh mỗi 5 giây

    return () => clearInterval(interval);
  }, [lastAlert]);

  const sendLeakEmail = (sensor) => {
    const templateParams = {
      deviceId: sensor.deviceid,
      ppm: sensor.ppm,
      alert: sensor.alert,
      timestamp: new Date(sensor.timestamp).toLocaleString()
    };

    emailjs.send(
      'service_e9kvyym',
      'template_23725ig',
      templateParams,
      '5adeR-9Cpkn0pVyGf'
    )
    .then(() => console.log("✅ Leak alert email sent"))
    .catch((err) => console.error("❌ Email send failed:", err));
  };

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
          <tbody id="sensorTableBody">{list}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Sensor;
