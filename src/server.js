import express from "express";
import cors from "cors";
import categoriesRouters from "./routers/categories.routers.js";
import gamesRouters from "./routers/games.routers.js";
import customersRouters from "./routers/customers.router.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use(categoriesRouters);

app.use(gamesRouters);

app.use(customersRouters);

app.listen(4000, () => console.log("Hello Bitch"));
