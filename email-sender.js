// In this task, you will:

// create a file named email-sender
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

// Try to send your self email using this

const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    },
  });

  const mailOptions = {
    from: "",
    to: "",
    subject: "Hello 🎈",
    text: "Hello World",
    html: "<h3>Hello World??</h3>",
  };

  let info = await transporter.sendMail(mailOptions, (err, result) => {
    if (err) {
        console.log(err)
    }
    else{
        console.log('Email sent: ' + result.response)
    }
  });
}
main().catch(console.error);
