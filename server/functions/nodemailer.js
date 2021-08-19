const nodemailer = require("nodemailer");

const email = async (to, subject, html) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.court13.local",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"TP Mgmt" <ciscotpmgmt@fljud13.org>',
    to: to,
    subject: subject,
    html: html,
  });

  console.log("Message sent: %s", info.messageId);
};

exports.email = email;
