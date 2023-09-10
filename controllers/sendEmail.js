const nodemailer = require('nodemailer')



const sendEmail = async (req, res)=>{
const testAccount = await nodemailer.createTestAccount();
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'zoey.macgyver@ethereal.email',
        pass: 'cd2XYKnrbuz6uxN2Cj'
    }
});

const info = await transporter.sendMail({
    from:'"Didi" <thisgmail@gmail.com>',
    to: 'hergmail@gmail.com',
    subject: 'Reaching out',
    html: '<h2>Reaching out to bubu</h2>'
})

    res.send("sent email")
}


module.exports= sendEmail