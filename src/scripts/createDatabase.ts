import 'isomorphic-fetch';
import * as sqlite3 from 'sqlite3';

import { Step } from '../lib/step';

const sqliteDb = new sqlite3.Database('step.db');

const step = new Step({
    sqliteDb
});

step.persistResource('ESV');

sqliteDb.close();
