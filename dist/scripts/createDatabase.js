"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
var sqlite3 = require("sqlite3");
var step_1 = require("../lib/step");
var sqliteDb = new sqlite3.Database('step.db');
var step = new step_1.Step({
    sqliteDb: sqliteDb
});
step.persistResource('ESV');
sqliteDb.close();
