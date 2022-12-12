import { Router } from "express";
import { getCustomers } from "../controllers/customers.controllers.js";

const routers = Router();

routers.get("/customers", getCustomers);

export default routers;
