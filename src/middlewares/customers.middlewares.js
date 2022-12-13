import joi from "joi";
import { connection } from "../database/database.js";

const customerSchema = joi.object({
  name: joi.string().min(3).trim().required(),
  phone: joi.number().integer().required(),
  cpf: joi.number().integer().required(),
  birthday: joi
    .string()
    .regex(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)
    .required(),
});

export async function validateCustomer(req, res, next) {
  const validation = customerSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    return res.sendStatus(400);
  }
  const { cpf, phone } = req.body;

  if (cpf.length !== 11) {
    return res.sendStatus(400);
  }

  if (phone.length !== 11 && phone.length !== 10) {
    return res.sendStatus(400);
  }

  try {
    const customers = await connection.query(
      "SELECT * FROM customers WHERE cpf=$1;",
      [cpf]
    );
    if (customers.rows.length !== 0) {
      return res.sendStatus(409);
    }
    next();
  } catch (error) {
    console.log(error);
  }
}

export async function validateUpdateCustomer(req, res, next) {
  const validation = customerSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    return res.sendStatus(400);
  }
  const { cpf, phone } = req.body;

  if (cpf.length !== 11) {
    return res.sendStatus(400);
  }

  if (phone.length !== 11 && phone.length !== 10) {
    return res.sendStatus(400);
  }
  const { id } = req.params;

  try {
    const customers = await connection.query(
      "SELECT * FROM customers WHERE cpf=$1 ;",
      [cpf]
    );
    const customersWithCpf = customers.rows;
    const cpfAlreadyExist = customersWithCpf.filter(
      (customer) => customer.id !== id && customer.cpf === cpf
    );
    if (cpfAlreadyExist.length > 0) {
      return res.sendStatus(409);
    }
    
  } catch (error) {
    console.log(error);
  }

  next();
}
