import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const transporter = nodemailer.createTransport({
        host: 'mail.adm.tools',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })
    await transporter.sendMail({
        //from: `${body.name} <${body.email}>`,
        from: `"Tovortoped" <info@tovortoped.com.ua>`,
        to: "tovortoped@gmail.com",
        subject: `Нове повідомлення від Харків`,
        text: body.message,
        html: `
        <p><b>Ім’я:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Телефон:</b> ${body.phone}</p>
        <p><b>Повідомлення:</b><br/>${body.message}</p>
      `
    })

    return { success: true }
})
