import express from "express";
import cors from "cors";
import { categorieValidation } from "./middlewares/categories.middleware.js";
import {
  getCategories,
  insertCategories,
} from "./controllers/categories.controller.js";
import { getGames, postGame } from "./controllers/games.controllers.js";
import { validateGame } from "./middlewares/games.middlewares.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/categories", getCategories);

app.post("/categories", categorieValidation, insertCategories);

app.get("/games", getGames);

app.post("/games", validateGame, postGame);

app.listen(4000, () => console.log("Hello Bitch"));
