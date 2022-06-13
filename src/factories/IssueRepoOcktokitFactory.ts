import { IssueRepoOcktokit } from "@application/repos/IssueRepo";
import { FactoryError } from "@errors/FactoryError";

export class IssueRepoOcktokitFactory {
    static create() {
        try {
            return new IssueRepoOcktokit({
                owner: process.env.GIT_OWNER,
                repo: process.env.GIT_REPO
            });
        } catch(error) {
            throw new FactoryError(IssueRepoOcktokit, error);
        }
    }
}
