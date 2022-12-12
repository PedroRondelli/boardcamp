import { connection } from "../database/database.js";

export async function getCustomers(req, res) {
  const { cpf } = req.query;
  try {
    const customers = await connection.query("SELECT * FROM customers;");

    if (cpf) {
      const consumersFound = customers.rows.filter((customer) =>
        customer.cpf.startsWith(cpf)
      );
      return res.send(consumersFound);
    }

    res.send(customers.rows);
  } catch (erro) {
    console.log(erro);
  }
}

export async function getCustomersById(req, res) {
  const { id } = req.params;
  try {
    const customer = await connection.query(
      "SELECT * FROM customers WHERE id=$1",
      [id]
    );
    return res.send(customer.rows[0]);
  } catch (error) {
    console.log(error);
  }
}
