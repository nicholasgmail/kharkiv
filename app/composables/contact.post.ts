import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // Налаштування SMTP
    const transporter = nodemailer.createTransport({
        host: "mail.adm.tools", // або свій SMTP
        port: 587,
        secure: false,
        auth: {
            user: "tovortoped@gmail.com", // пошта
            pass: "invatex5000"  // пароль або App Password
        },
    })

    // Відправка
    await transporter.sendMail({
        from: `"Website" <polinoburatino@gmail.com>`,
        to: "nicholas.us.03@gmail.com", // куди надсилати
        subject: "Нове повідомлення з сайту",
        text: body.message,
        html: `<p><b>Ім’я:</b> ${body.name}</p>
           <p><b>Email:</b> ${body.email}</p>
           <p><b>Повідомлення:</b><br/>${body.message}</p>`
    })

    return { success: true }
})
