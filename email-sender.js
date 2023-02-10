const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'username',
    pass: 'password'
  }
});

const mailOptions = {
  from: 'sender@example.com',
  to: 'recipient@example.com',
  subject: 'Subject',
  text: 'Hello, World!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
