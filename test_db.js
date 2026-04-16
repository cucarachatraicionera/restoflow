const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

try {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const db = new Database(path.join(dataDir, 'restoflow.sqlite'));
  db.pragma('journal_mode = WAL');

  db.exec(`
    CREATE TABLE IF NOT EXISTS restaurants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      restaurantName TEXT NOT NULL,
      ownerName TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      menu TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log("DB test success");
} catch (error) {
  console.error("DB test error:", error);
}
