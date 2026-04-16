import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Ensure the data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(path.join(dataDir, 'restoflow.sqlite'));
db.pragma('journal_mode = WAL');

// Initialize tables
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

export interface RestaurantRegistration {
  id?: number;
  restaurantName: string;
  ownerName: string;
  phone: string;
  email: string;
  menu: string;
}

export function saveRegistration(registration: RestaurantRegistration) {
  const stmt = db.prepare(`
    INSERT INTO restaurants (restaurantName, ownerName, phone, email, menu)
    VALUES (@restaurantName, @ownerName, @phone, @email, @menu)
  `);
  
  const result = stmt.run(registration);
  return result.lastInsertRowid;
}

export function getAllRegistrations() {
  const stmt = db.prepare('SELECT * FROM restaurants ORDER BY createdAt DESC');
  return stmt.all() as RestaurantRegistration[];
}

export default db;
