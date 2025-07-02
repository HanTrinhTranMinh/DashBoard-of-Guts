export class SensorModel {
  constructor({
    id = '',
    deviceid = '',
    timestamp = 0,
    ppm = 0,
    alert = ''
  } = {}) {
    this.id = id;
    this.deviceid = deviceid;
    this.timestamp = timestamp;
    this.ppm = ppm;
    this.alert = alert;
  }
}
