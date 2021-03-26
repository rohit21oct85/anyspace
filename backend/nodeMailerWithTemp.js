const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
module.exports = sendMail = (from, to, subject, html) => {
    const msg = {
        to: to,
        from: from,
        subject: subject,
        html: html,
    };

    return sgMail.send(msg)
}