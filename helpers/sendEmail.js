const nodemailer = require("nodemailer");
require("dotenv").config();

const config = {
  host: "smtp.meta.ua",
  port: 465, // 25, 465, 2525
  secure: true,
  auth: {
    user: "AlexSiryi@meta.ua",
    pass: process.env.META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  console.log("😎", data);
  const emailOptions = {
    from: "AlexSiryi@meta.ua",
    to: data.email,
    subject: data.subject,
    text: data.text,
  };

  transporter
    .sendMail(emailOptions)
    .then((info) => console.log(info))
    .catch((err) => console.log(err));

  //   await transporter.sendMail(emailOptions);
  //   return true;
};

module.exports = sendEmail;
