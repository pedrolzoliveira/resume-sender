import { DatabaseInitiatorFactory } from "./DatabaseInitiatorFactory";

import { EmailsRepoSQLite } from "@application/repos/EmailsRepo";
import { FactoryError } from "@errors/FactoryError";

export class EmailsRepoSQLiteFactory {
    static async create() {
        try {
            const dbInitiator = DatabaseInitiatorFactory.create();
            await dbInitiator.Iniciate();
            return new EmailsRepoSQLite(dbInitiator.database);
        } catch(error) {
            throw new FactoryError(EmailsRepoSQLite, error);
        }
    }
}