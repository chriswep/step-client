import { Database } from 'sqlite3';

export class Step {
    private db: Database;
    constructor({ sqliteDb }: { sqliteDb: Database }) {
        this.db = sqliteDb;
    }

    persistResource = (resId: string) => {
        resId;
        this.db;
    };

    getStepData = async () =>
        await fetch(
            'https://www.stepbible.org/rest/search/masterSearch/version=ESV%7Creference=John.1'
        ).then(r => r.json());
}
