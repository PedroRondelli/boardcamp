import { connection } from "../database/database.js";

export async function getGames(req, res) {
  try {
    const games = await connection.query("SELECT * FROM games;");
   
    const searchTerm = req.query.name;
    if (searchTerm) {
      const gamesFounded = games.rows.filter((game) =>
        game.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      return res.send(gamesFounded);
    }
    res.send(games.rows);
  } catch (error) {
    console.log(error);
  }
}

export async function postGame(req, res) {
  const { name, image, stockTotal, categoryId, pricePerDay } = req.body;
  try {
    console.log("im here");
    await connection.query(
      'INSERT INTO games ("name","image","stockTotal","categoryId","pricePerDay") VALUES ($1,$2,$3,$4,$5) ',
      [name, image, stockTotal, categoryId, pricePerDay]
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
}
