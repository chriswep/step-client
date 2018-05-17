import { Database } from 'sqlite3';
export declare class Step {
    private db;
    constructor({sqliteDb}: {
        sqliteDb: Database;
    });
    getDb: () => Database;
    getStepData: () => Promise<any>;
}
