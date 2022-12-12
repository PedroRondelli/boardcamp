import { Router } from "express";
import {
  getCategories,
  insertCategories,
} from "../controllers/categories.controller.js";
import { categorieValidation } from "../middlewares/categories.middleware.js";

const router = Router();

router.get("/categories", getCategories);
router.post("/categories", categorieValidation, insertCategories);

export default router;
