import '../styles/Camera.css';

function SensorRow({sensor}) {
    return (
        <tr>
          <td>{sensor.timestamp}</td>
          <td>{sensor.deviceid}</td>
          <td>{sensor.ppm}</td>
          <td>{sensor.alert}</td>
        </tr>
    );
}

export default SensorRow;