import { InfoExtractor } from "@application/infoExtractor/InfoExtractor";
import { App } from "@application/App";
import { FactoryError } from "@errors/FactoryError";
import { IssueRepoOcktokitFactory } from "./IssueRepoOcktokitFactory";
import { SendAndSaveEmailFactory } from "./send-and-save-email-factory";

export class AppFactory {

    static async create(): Promise<App> {
        try {
            const infoExtractor = new InfoExtractor();
            const issueRepo = IssueRepoOcktokitFactory.create();
            const sendAndSaveEmail = await SendAndSaveEmailFactory.create();
    
            return new App(issueRepo, sendAndSaveEmail, infoExtractor);
        } catch(error) {
            throw new FactoryError(App, error);
        }
    }
}

