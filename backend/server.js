const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
// const path = require("path");

dotenv.config(); // Load environment variables from .env

const PORT = process.env.PORT || 4000;
const FRONTEND_URI=process.env.FRONTEND_URI;
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  // origin: "https://portfolio-arpan-beras-projects.vercel.app/",
  origin: "*",
  // methods: ["GET", "POST"],
  // allowedHeaders: ["Content-Type"]
}));

// POST route for sending emails
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields (name, email, message) are required.");
  }

  try {
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Load from .env
        pass: process.env.GMAIL_PASS // Load from .env
      },
      debug: true, // Enable debug output
      logger: true // Log SMTP communication
    });

    // Mail options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Format sender as "Name <email>"
      to: process.env.GMAIL_USER, // Send to your email
      subject: `Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Failed to send email.");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});