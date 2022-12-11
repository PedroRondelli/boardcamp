import joi from "joi";
import { connection } from "../database/database.js";

const gameSchema = joi.object({
  name: joi.string().min(3).required().trim(),
  image: joi.string().uri().required().trim(),
  stockTotal: joi.number().integer().greater(0).required(),
  categoryId: joi.number().integer().required(),
  pricePerDay: joi.number().integer().greater(0).required(),
});

export async function validateGame(req, res, next) {
  const validation = gameSchema.validate(req.body);

  if (validation.error) {
    console.log("foi o schema");
    console.log(validation.error);
    return res.sendStatus(400);
  }
  const { categoryId, name } = req.body;
  const categoryExist = await connection.query(
    "SELECT * FROM categories WHERE id=$1",
    [categoryId]
  );
  if (categoryExist.rows.length === 0) {
    console.log("foi a categoria");
    return res.sendStatus(400);
  }
  const nameExist = await connection.query(
    "SELECT * FROM games WHERE name=$1",
    [name]
  );
  if (nameExist.rows.length > 0) {
    console.log("foi o nome");
    return res.sendStatus(409);
  }
  console.log("Ta tudo certo");
  next();
}
