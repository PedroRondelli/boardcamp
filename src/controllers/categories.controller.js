import { connection } from "../database/database.js";

export async function insertCategories(req, res) {
  const { name } = req.body;
  try {
    const categorieExist = await connection.query(
      "SELECT * FROM categories WHERE name=$1",
      [name.toLowerCase()]
    );

    if (categorieExist.rows.length === 0) {
      await connection.query("INSERT INTO categories (name) VALUES ($1) ;", [
        name.toLowerCase(),
      ]);
      return res.sendStatus(201);
    } else {
      res.sendStatus(409);
    }
  } catch (erro) {
    console.log(erro);
  }
}

export async function getCategories(req,res){
  try {
    const categories = await connection.query("SELECT * FROM categories;");
    res.send(categories.rows);
  } catch (erro) {
    console.log(erro);
  }
}