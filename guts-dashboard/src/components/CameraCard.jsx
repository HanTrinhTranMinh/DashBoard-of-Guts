import '../styles/Camera.css';

function CameraCard({camera}) {
  return (
    <div className="camera-feed">
        <div className="camera-header">
          <span className="camera-title">{camera.deviceid}</span>
          <div className="camera-status">
              <span className="status-dot"></span>
              <span>Online</span>
          </div>
        </div>
        <div className="camera-image-pair">
          <div className="camera-image-block">
              <img src={`${camera.imageUrl}?t=${Date.now()}`} alt="Current Image" />
              <p className="image-label">Latest Image</p>
          </div>
          <div className="camera-image-block">
              <img src={`${camera.anomalyImageUrl}?t=${Date.now()}`} alt="Warning Image" />
              <p className="image-label">Latest Warning Image</p>
          </div>
        </div>
    </div>
  );
}

export default CameraCard;