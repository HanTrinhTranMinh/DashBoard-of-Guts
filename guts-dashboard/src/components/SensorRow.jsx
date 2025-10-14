import '../styles/Camera.css';


function SensorRow({sensor}) {

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      hour12: false,
    });
  };

  const status = (alert) => {
    if (alert === 0) {
      return 'Normal';
    } else if (alert === 1) {
      return 'Warning';
    } else if (alert === 2) {
      return 'Danger';
    } else {
      return 'Critical';
    }
  };

  const formattedTimestamp = formatTimestamp(sensor.timestamp);
  const formattedStatus = status(sensor.alert);

  return (
      <tr>
        <td>{formattedTimestamp}</td>
        <td>{sensor.deviceid}</td>
        <td>{sensor.ppm.toFixed(2)}</td>
        <td>{formattedStatus}</td>
      </tr>
  );
}

export default SensorRow;