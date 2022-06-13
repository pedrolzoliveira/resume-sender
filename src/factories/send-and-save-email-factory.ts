import { SendAndSaveEmail } from "@application/use-cases/send-and-save-email";
import { FactoryError } from "@errors/FactoryError";

import { EmailsRepoSQLiteFactory } from "./EmailsRepoFactory";
import { MailerFactory } from "./MailerFactory";


export class SendAndSaveEmailFactory {
    static async create(): Promise<SendAndSaveEmail> {
        try {
            const emailsRepo = await EmailsRepoSQLiteFactory.create();
            const mailer = MailerFactory.create();
            return new SendAndSaveEmail(emailsRepo, mailer);
        } catch(error) {
            throw new FactoryError(SendAndSaveEmail, error);
        }
    }
}