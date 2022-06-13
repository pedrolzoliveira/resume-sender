import { Mailer } from "@application/mailer/Mailer";
import { EmailsRepoSQLite } from "@application/repos/EmailsRepo";

export class SendAndSaveEmail {
    
    constructor(private emailsRepo: EmailsRepoSQLite, private mailer: Mailer) {}
    
    async exec(email: string) {
        const sent = await this.emailsRepo.IsSent(email);
        if (!sent) {
            await this.mailer.sendResume(email);
            await this.emailsRepo.Save(email);
        }

    }
}