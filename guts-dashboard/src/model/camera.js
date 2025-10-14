// models/CameraModel.js
export class CameraModel {
  constructor({
    id = '',
    deviceid = '',
    captureAt = null,
    imageUrl = '',
    anomalyImageUrl = '',
    fileName = '',
    processStatus = null,
    confident = 0.0,
    isAnomaly = false
  } = {}) {
    this.id = id;
    this.deviceid = deviceid;
    this.captureAt = captureAt;
    this.imageUrl = imageUrl;
    this.anomalyImageUrl = anomalyImageUrl;
    this.fileName = fileName;
    this.processStatus = processStatus;
    this.confident = confident;
    this.isAnomaly = isAnomaly;
  }

  // Example: you can add logic handling functions here
  isHighConfidence() {
    return this.confident >= 0.8;
  }

  getDisplayStatus() {
    return this.isAnomaly ? 'Warning' : 'Normal';
  }
}

