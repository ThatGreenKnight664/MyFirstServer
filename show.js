const db = require('./db');

const rows = db.prepare("SELECT body FROM posts WHERE id = 20").all();
console.table(rows);