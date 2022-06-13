import { createTransport } from "nodemailer";
import { Mailer } from "@application/mailer/Mailer";
import { FactoryError } from "@errors/FactoryError";

export class MailerFactory {
    static create() {
        try {
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
        } catch(error) {
            throw new FactoryError(Mailer, error);
        }
    }
}