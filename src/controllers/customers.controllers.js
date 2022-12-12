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
    if (customer.rows.length === 0) {
      return res.sendStatus(404);
    }
    return res.send(customer.rows[0]);
  } catch (error) {
    console.log(error);
  }
}

export async function postCustomers(req, res) {
  const { name, phone, cpf, birthday } = req.body;
  try {
    await connection.query(
      "INSERT INTO customers (name,phone,cpf,birthday) VALUES ($1,$2,$3,$4) ;",
      [name, phone, cpf, birthday]
    );
    res.sendStatus(200);
  } catch (erro) {
    console.log(erro);
  }
}
