import { Router } from "express";
import { getGames, postGame } from "../controllers/games.controllers.js";
import { validateGame } from "../middlewares/games.middlewares.js";

const routers = Router();

routers.get("/games", getGames);

routers.post("/games", validateGame, postGame);

export default routers;
