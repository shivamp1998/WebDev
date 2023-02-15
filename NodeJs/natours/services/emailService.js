const nodemailer = require('nodemailer');


exports.sendMail = async(options) => {
    const trasporter = nodemailer.createTransport({
        host: options.host,
        port: options.port,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })
    const send = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: options.to,
        subject: options.subject,
        text: options.text
    })
    console.log('message sent', send);
}
