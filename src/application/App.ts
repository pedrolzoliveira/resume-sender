import { IssueRepoOcktokit } from "./repos/IssueRepo";
import { SendAndSaveEmail } from "./use-cases/send-and-save-email";
import { InfoExtractor } from "./infoExtractor/InfoExtractor";


export class App {
    constructor(private issueRepo: IssueRepoOcktokit, private sendAndSaveEmail: SendAndSaveEmail, private infoExtractor: InfoExtractor) {}

    async run() {
        const issues = await this.issueRepo.getIssuesByLabel(process.env.GIT_LABEL);
        for (const issue of issues) {
            const info = this.infoExtractor.extract(issue.body);
            if (info.firstEmail) {
                await this.sendAndSaveEmail.exec(info.firstEmail);
            }
        }
    }

}