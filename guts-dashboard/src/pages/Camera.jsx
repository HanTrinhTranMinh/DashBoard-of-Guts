import '../styles/Camera.css';
import CameraCard from '../components/CameraCard';
import { CameraModel } from '../model/camera';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function Camera() {
  const [camera, setCamera] = useState([]);
  const lastSentImage = useRef(null); // tránh gửi email trùng

  // ======== GỬI EMAIL ========
  const sendEmail = (imageUrl, ppm) => {
    emailjs.send(
      "service_e0iz1bd",       // SERVICE_ID
      "template_dv68cq7",      // TEMPLATE_ID
      {
        leak_image: imageUrl,
        ppm: ppm,
        timestamp: new Date().toLocaleString("vi-VN"),
      },
      "armCp4DkEYj6ncEkx"      // PUBLIC KEY
    )
    .then(() => console.log("📨 Email sent!"))
    .catch((err) => console.error("❌ EmailJS error:", err));
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy ảnh NORMAL + ANOMALY
        const [resNormal, resAnomaly] = await Promise.all([
          axios.get("https://h2-api-z7sq.onrender.com/api/thermalimage/latest?deviceId=camcuakhai"),
          axios.get("https://h2-api-z7sq.onrender.com/api/thermalimage/latest?deviceId=camcuakhai_ano")
        ]);

        // Lấy sensor ppm
        const sensorRes = await axios.get(
          "https://h2-api-z7sq.onrender.com/api/sensor/latest?deviceId=sensorcuakhai"
        );
        const ppm = sensorRes.data.hydrogenPpm;

        // Tạo camera object
        const cam = new CameraModel({
          id: resNormal.data.id,
          deviceid: resNormal.data.deviceId,
          captureAt: resNormal.data.timestamp,
          imageUrl: `${resNormal.data.imageUrl}?t=${Date.now()}`,
          anomalyImageUrl: `${resAnomaly.data.imageUrl}?t=${Date.now()}`,
        });

        setCamera([cam]);

        // ======== KHI CÓ ẢNH LEAK MỚI → GỬI EMAIL ========
        if (
          cam.anomalyImageUrl &&
          cam.anomalyImageUrl !== lastSentImage.current
        ) {
          lastSentImage.current = cam.anomalyImageUrl;
          sendEmail(cam.anomalyImageUrl, ppm);
        }

      } catch (err) {
        console.error("Cannot connect to server:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1500);
    return () => clearInterval(interval);

  }, []);

  const list = camera.map((cam) => (
    <CameraCard key={cam.id} camera={cam} />
  ));

  return (
    <div id="overview" className="page active">
      <div className="page-header">
        <h1 className="page-title">Camera Monitoring</h1>
        <p className="page-subtitle">View images from camera</p>
      </div>

      <div className="camera-grid">
        {list}
      </div>
    </div>
  );
}

export default Camera;
