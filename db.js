const { DatabaseSync } = require('node:sqlite');

const db = new DatabaseSync('cms.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL
    )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        body TEXT NOT NULL,
        created_at TEXT DEFULT CURRENT_TIMESTAMP
    )
`);


module.exports = db;