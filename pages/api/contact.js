const mail = require('@sendgrid/mail');

mail.setApiKey("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");

export default async function handler(req, res) {
    const body = req.body;
    console.log(body);
    try {

    const message = `
        Name : ${body.name}\r\n
        Email : ${body.email}\r\n
        Message: ${body.message}
    `

    const data = {
        to : body.email,
        from:"admin@demaze.in",
        subject:"Testing message",
        text:message,
        html:message.replace(/\r\n/g,'<br/>')
    }
        await mail.send(data)
        res.status(400).json({ name: 'success' })
    } catch (error) {
        res.status(400).json({ name: error.message})
    }
}