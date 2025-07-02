// models/CameraModel.js
export class CameraModel {
  constructor({
    id = '',
    deviceid = '',
    captureAt = null,
    imageUrl = '',
    fileName = '',
    processStatus = null,
    confident = 0.0,
    isAnomaly = false
  } = {}) {
    this.id = id;
    this.deviceid = deviceid;
    this.captureAt = captureAt;
    this.imageUrl = imageUrl;
    this.fileName = fileName;
    this.processStatus = processStatus;
    this.confident = confident;
    this.isAnomaly = isAnomaly;
  }

  // Ví dụ: bạn có thể thêm hàm xử lý logic ở đây
  isHighConfidence() {
    return this.confident >= 0.8;
  }

  getDisplayStatus() {
    return this.isAnomaly ? 'Cảnh báo' : 'Bình thường';
  }
}

