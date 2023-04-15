const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "sergio@whateverworks.design", // generated ethereal user
      pass: "kntimgmkpibequbx", // generated ethereal password
    },
});

module.exports = {
    transporter
}
