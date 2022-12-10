import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { categorieValidation } from "../middlewares/categories.middleware.js";
import {
  getCategories,
  insertCategories,
} from "../controllers/categories.controller.js";
import { getGames } from "../controllers/games.controllers.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/categories", getCategories);

app.post("/categories", categorieValidation, insertCategories);

app.get("/games", getGames);

app.listen(4000, () => console.log("Hello Bitch"));
