import { connection } from "../database.js";

export async function getGames(req, res) {
  try {
    const games = await connection.query("SELECT * FROM games;");
    const searchTerm = req.query.name;
    if (searchTerm) {
      const gamesFounded = games.rows.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return res.send(gamesFounded)
    }
    res.send(games.rows);
  } catch (error) {
    console.log(error);
  }
}
