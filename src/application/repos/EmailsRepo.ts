import { Database } from "sqlite3";

export interface EmailsRepo {
    IsSent(email: string): Promise<boolean>;
}

export class EmailsRepoSQLite implements EmailsRepo {

    constructor(private database: Database) {}

    IsSent(email: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.database.get('SELECT * FROM emails WHERE email = $email', { $email: email }, (err, row) => {
                if (err) reject(err);
                resolve(Boolean(row?.email));
            });
        })
    }

    Save(email: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.database.run('INSERT INTO emails (email) VALUES ($email)', {
                $email: email,
            }, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

}
