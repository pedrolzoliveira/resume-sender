import { Transporter, createTransport } from "nodemailer";


export class Mailer {
    constructor(private transporter: Transporter) {}

    async sendResume(email: string) {
        return this.transporter.sendMail({
            to: email,
            from: process.env.EMAIL_FROM,
            subject: process.env.EMAIL_SUBJECT,
            text: `Olá, eu sou Pedro e vi que vocês estão precisando de um desenvolvedor NodeJS e eu gostaria de trabalhar com vocês!
            Eu automatizei o processo de envio de emails com meu currículo para as vagas de NodeJS que foram publicadas no GitHub de vagas.
            Se quiser dar uma olhada nesse processo, acesse o link abaixo:
            https://www.github.com/pdroluiz/resume-sender`,
            attachments: [
                {
                    filename: 'resume.pdf',
                    path: process.env.RESUME_PATH
                }
            ]
        })
    }

}

export class MailerFactory {
    static create() {
        const transporter = createTransport({
            secure: true,
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }

        })
        return new Mailer(transporter);
    }
}