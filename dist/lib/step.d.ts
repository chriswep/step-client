import { Database } from 'sqlite3';
export declare class Step {
    private db;
    constructor({sqliteDb}: {
        sqliteDb: Database;
    });
    persistResource: (resId: string) => void;
    getStepData: () => Promise<any>;
}
