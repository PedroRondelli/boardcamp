import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { categorieValidation } from "../middlewares/categories.middleware.js";
import { insertCategories } from "../controllers/categories.controller.js";
import { connection } from "../database.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/categories", async (req, res) => {
  try {
    const categories = await connection.query("SELECT * FROM categories;");
    res.send(categories.rows);
  } catch (erro) {
    console.log(erro);
  }
});

app.post("/categories", categorieValidation, insertCategories);

app.listen(4000, () => console.log("Hello Bitch"));
