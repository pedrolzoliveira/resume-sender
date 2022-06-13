import { GetIssuesWithoutEmail } from "@application/use-cases/get-issues-without-email";
import { InfoExtractor } from "@application/infoExtractor/InfoExtractor";

import { IssueRepoOcktokitFactory } from "./IssueRepoOcktokitFactory";

import { FactoryError } from "@errors/FactoryError";

export class GetIssuesWithoutEmailFactory {
    static create() {
        try {
            const infoExtractor = new InfoExtractor();
            const issueRepo = IssueRepoOcktokitFactory.create();
            return new GetIssuesWithoutEmail(issueRepo, infoExtractor);
        } catch(error) {
            new FactoryError(GetIssuesWithoutEmail, error)
        }
    }
}