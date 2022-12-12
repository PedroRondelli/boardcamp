import { connection } from "../database/database.js";

export async function getCustomers(req, res) {
  const customers = await connection.query("SELECT * FROM customers;");
  console.log(customers.rows);
  res.sendStatus(200);
}
