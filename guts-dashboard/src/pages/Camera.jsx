import '../styles/Camera.css';
import CameraCard from '../components/CameraCard';
import { CameraModel } from '../model/camera';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Camera() {

  const [camera, setCamera] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resNormal, resAnomaly] = await Promise.all([
          axios.get("https://h2-api-z7sq.onrender.com/api/thermalimage/latest?deviceId=camcuakhai"),
          axios.get("https://h2-api-z7sq.onrender.com/api/thermalimage/latest?deviceId=camcuakhai_ano")
        ]);

        const cam = new CameraModel({
          id: resNormal.data.id,
          deviceid: resNormal.data.deviceId,
          captureAt: resNormal.data.timestamp,
          imageUrl: resNormal.data.imageUrl,
          anomalyImageUrl: resAnomaly.data.imageUrl,
        });

        setCamera([cam]);
      } catch (err) {
        console.error("Cannot connect to server:", err);
      }
    };

      fetchData();
    }, []);


  const list = camera.map((camera) => {
    return (
      <CameraCard key={camera.id} camera={camera} />
    )
  })

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