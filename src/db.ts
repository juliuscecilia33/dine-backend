import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

// Type definitions for the database
interface IExtensions {}
type DB = pgPromise.IDatabase<IExtensions> & IExtensions;

// Database connection configuration
const pgp = pgPromise({});
const db: DB = pgp({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export default db;
