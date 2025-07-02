import '../styles/Sensor.css';
import { useEffect, useState } from 'react';
import { SensorModel } from '../model/sensor';
import SensorRow from '../components/SensorRow';


function Sensor() {
    const sensor = [
        new SensorModel({
            id: 1,
            deviceid: 'Sensor 1',
            timestamp: 1629200000,
            ppm: 200,
            alert: 'danger',
        }),
        new SensorModel({
            id: 2,
            deviceid: 'Sensor 2',
            timestamp: 1629200000,
            ppm: 200,
            alert: 'danger',
        })
    ]

    const list = sensor.map((sensor) => {
        return (
            <SensorRow key={sensor.id} sensor={sensor} />
        )
    })

    return (
        <div id="overview" class="page active">
            <div class="page-header">
                <h1 class="page-title">Dữ liệu Sensor</h1>
                <p class="page-subtitle">Thông tin chi tiết các sensor trong ngày</p>
            </div>

            <div class="chart-container">
                <h3 style={{"margin-bottom": "20px"}}>Dữ liệu thu thập hôm nay</h3>
                <table class="sensor-table">
                        <thead>
                            <tr>
                                <th>Thời gian</th>
                                <th>Sensor ID</th>
                                <th>H2 (ppm)</th>
                                <th>Trạng thái</th>
                            </tr>

                        </thead>
                    <tbody id="sensorTableBody">
                        {list}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Sensor;