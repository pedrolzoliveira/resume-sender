import { Database } from "sqlite3";

export class DatabaseInitiator {

    constructor(public database: Database) {}

    Iniciate() {
        return new Promise(resolve => {
            this.database.run(`CREATE TABLE IF NOT EXISTS emails (email TEXT)`, (err) => {
                if (err) throw err;
                resolve(null);
            });
        })
    }
}
