import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pkg from "pg";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const { Pool } = pkg;

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123456789",
  database: "boardcamp",
});

app.get("/categories", async (req, res) => {
  try {
    const categories = await connection.query("SELECT * FROM categories;");
    res.send(categories.rows);
  } catch (erro) {
    console.log(erro);
  }
});

app.listen(4000, () => console.log("Hello Bitch"));
