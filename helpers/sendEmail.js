const nodemailer = require("nodemailer");
require("dotenv").config();

const config = {
  host: "smtp.meta.ua",
  port: 465, // 25, 465, 2525,
  secure: true,
  auth: {
    user: "AlexSiryi@meta.ua",
    pass: process.env.META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const emailOptions = {
    from: "AlexSiryi@meta.ua",
    to: data.email,
    subject: data.subject,
    html: data.html,
  };

  try {
    await transporter.sendMail(emailOptions);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;
