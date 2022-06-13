import { Database } from "sqlite3";
import { DatabaseInitiator } from "@infra/database";

import { FactoryError } from "@errors/FactoryError";

export class DatabaseInitiatorFactory {
    
    static create() {
        try {
            return new DatabaseInitiator(new Database(process.env.DB_PATH));
        } catch(error) {
            throw new FactoryError(DatabaseInitiator, error);
        }
    
    }
}