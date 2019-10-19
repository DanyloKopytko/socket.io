const mailer = require('nodemailer');

const { nigerianPrinceNeedYourHelp, email, password } = require('../../config');

module.exports = async user_email => {
    const transport = mailer.createTransport({
        service: 'Gmail',
        auth: {
            user: email,
            pass: password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    await transport.sendMail({
        from: 'Nigerian prince',
        to: user_email,
        subject: 'Test message',
        html: nigerianPrinceNeedYourHelp
    });
};