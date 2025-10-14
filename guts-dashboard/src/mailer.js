import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendLeakEmail(alert) {
  const mailOptions = {
    from: `"Detect H₂ System" <${process.env.EMAIL_USER}>`,
    to: process.env.ALERT_RECIPIENT,
    subject: `🚨 Leak Detected — Camera ${alert.cameraId}`,
    html: `
      <h2 style="color:#e53935;">Hydrogen Leak Alert!</h2>
      <p><strong>Camera:</strong> ${alert.cameraId}</p>
      <p><strong>Confidence:</strong> ${(alert.confidence * 100).toFixed(1)}%</p>
      <p><strong>Max Temp:</strong> ${alert.maxTemp}°C</p>
      <p><strong>Time:</strong> ${alert.timestamp}</p>
      ${
        alert.imageUrl
          ? `<img src="${alert.imageUrl}" alt="Leak Image" width="400" style="border-radius:10px;border:1px solid #ccc;"/>`
          : ""
      }
      <hr />
      <p style="font-size:12px;color:#555;">Detect H₂ — Industrial Monitoring System</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
  } catch (err) {
    console.error("❌ Email send failed:", err);
  }
}
