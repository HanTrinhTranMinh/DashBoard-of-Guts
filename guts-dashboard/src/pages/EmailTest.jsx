import React from "react";
import emailjs from "emailjs-com";

function EmailTest() {
  const testSend = () => {
    const templateParams = {
      deviceId: "TEST_SENSOR",
      ppm: 4500,
      alert: "Leak Detected",
      timestamp: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_e9kvyym",     // ← thay bằng Service ID thật
        "template_23725ig",    // ← template bạn tạo
        templateParams,
        "5adeR-9Cpkn0pVyGf"      // ← Public Key trong Account → API Keys
      )
      .then(() => alert("✅ Email sent successfully!"))
      .catch((err) => alert("❌ Error: " + err.text));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Test EmailJS</h2>
      <button onClick={testSend} style={{ padding: 10, fontSize: 16 }}>
        Send Test Email
      </button>
    </div>
  );
}

export default EmailTest;
