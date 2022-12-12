import { connection } from "../database/database.js";

export async function getCustomers(req, res) {
  const customers = await connection.query("SELECT * FROM customers;");
  const { cpf } = req.query;

  if (cpf) {
    const consumersFound = customers.rows.filter((customer) =>
      customer.cpf.startsWith(cpf)
    );
    return res.send(consumersFound);
  }

  res.send(customers.rows);
}
