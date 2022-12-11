import pkg from "pg";
// import dotenv from "dotenv";
const { Pool } = pkg;

// dotenv.config();

export const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123456789",
  database: "boardcamp",
});

