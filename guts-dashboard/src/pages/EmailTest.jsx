import React from "react";
import emailjs from "@emailjs/browser";

function EmailTest() {

  const testSend = async () => {
    const params = {
      deviceId: "TEST_SENSOR",
      ppm: 4500,
      alert: "🔥 Leak Detected",
      timestamp: new Date().toLocaleString(),
    };

    try {
      const res = await emailjs.send(
        "service_e0iz1bd",     // ✔ Service ID của bạn
        "template_dv68cq7",    // ✔ Template ID của bạn
        params,
        "armCp4DkEYj6ncEkx"    // ✔ Public Key (API Key)
      );

      console.log("EmailJS Response:", res);
      alert("✅ Email sent successfully!");

    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("❌ Failed to send email");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2 style={{ color: "#2c3e50" }}>Test EmailJS</h2>
      <button
        onClick={testSend}
        style={{
          padding: "12px 25px",
          fontSize: 16,
          backgroundColor: "#27ae60",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Send Test Email
      </button>
    </div>
  );
}

export default EmailTest;
