import '../styles/Camera.css';
import CameraCard from '../components/CameraCard';
import { CameraModel } from '../model/camera';

function Camera() {

  const camera = [
    new CameraModel({
      id: 1,
      deviceid: 'Camera 1',
      imageUrl: '/download.png',
      status: 'online',
    }),
    new CameraModel({
      id: 2,
      deviceid: 'Camera 2',
      imageUrl: '/download.png',
      status: 'offline',
    })
  ]

  const list = camera.map((camera) => {
    return (
      <CameraCard key={camera.id} camera={camera} />
    )
  })

  return (
    <div id="overview" className="page active">
        <div className="page-header">
            <h1 className="page-title">Giám sát Camera</h1>
            <p className="page-subtitle">Xem hình ảnh từ camera</p>
        </div>
        <div className="camera-grid">
          {list}
        </div>
    </div>
  );
}

export default Camera;