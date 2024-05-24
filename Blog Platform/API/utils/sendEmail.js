import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async function (email, subject, message) {
  // Only needed if you don't have real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "zoey.blanda46@ethereal.email",
      pass: "Rw33WND2jeYMxfa3nD",
    },
  });

  // Send mail with defined transport object
  await transporter.sendMail({
    from: '"Kartikey Gupta" <kartikey@gmail.com>', // sender address
    to: email, // user email
    subject: subject, // Subject line
    html: message, // html body
  });
};

export default sendEmail;
