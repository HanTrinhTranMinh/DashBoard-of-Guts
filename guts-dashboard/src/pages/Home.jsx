import React from 'react';

function Home() {
  return (
    <div className="page active" id="overview">
      <div className="page-header">
        <h1 className="page-title">Trang Chủ</h1>
        <p className="page-subtitle">Cập nhật biểu đồ</p>
      </div>

      <div className="chart-container" style={{ textAlign: 'center', padding: '40px' }}>
        <h2 style={{ marginBottom: '20px' }}>Biểu đồ sẽ được cập nhật tại đây</h2>
        <p>Vui lòng kiểm tra lại sau để xem dữ liệu phân tích.</p>
      </div>
    </div>
  );
}

export default Home;
