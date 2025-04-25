const nodemailer = require("nodemailer");
require("dotenv").config(); 
const FormResponse = require("../models/FormResponse");
// Mail Controller
exports.resposeMail = async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const formResponse = new FormResponse({
    email,
    subject,
    message,
  });

  try {
   
    await formResponse.save();

 
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Set up mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, 
      subject: subject,
      text: message,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email", error });
      }
      console.log("Email sent:", info.response);
      return res.status(200).json({ message: "Email sent successfully to respose", info });
    });
  } catch (error) {
    console.error("Error saving form response:", error);
    return res.status(500).json({ message: "Failed to save form data", error });
  }
};
