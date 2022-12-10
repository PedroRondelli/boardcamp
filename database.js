// const connection = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
import pkg from "pg";
const { Pool } = pkg;

export const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123456789",
  database: "boardcamp",
});
