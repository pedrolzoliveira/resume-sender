import { IssueRepoOcktokit } from "@application/repos/IssueRepo";
import { InfoExtractor } from "@application/infoExtractor/InfoExtractor";

export class GetIssuesWithoutEmail {
    
    constructor(private issueRepo: IssueRepoOcktokit, private infoExtractor: InfoExtractor) {}

    async exec() {
        const issues = (await this.issueRepo.getIssuesByLabel(process.env.GIT_LABEL)).filter(issue => {
            return this.infoExtractor.extract(issue.body).firstEmail == undefined;
        });
        return issues;
    }

}