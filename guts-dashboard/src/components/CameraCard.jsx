import '../styles/Camera.css';

function CameraCard({camera}) {
  return (
    <div className="camera-feed">
        <div className="camera-header">
          <span className="camera-title">{camera.deviceid}</span>
          <div className="camera-status">
              <span className="status-dot"></span>
              <span>Trực tuyến</span>
          </div>
        </div>
        <div className="camera-image-pair">
          <div className="camera-image-block">
              <img src={camera.imageUrl} alt="Ảnh hiện tại" />
              <p className="image-label">Ảnh hiện tại</p>
          </div>
          <div className="camera-image-block">
              <img src={camera.imageUrl} alt="Ảnh cảnh báo" />
              <p className="image-label">Ảnh cảnh báo</p>
          </div>
        </div>
    </div>
  );
}

export default CameraCard;