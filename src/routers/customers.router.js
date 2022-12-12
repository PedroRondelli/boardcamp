import { Router } from "express";
import {
  getCustomers,
  getCustomersById,
  postCustomers,
} from "../controllers/customers.controllers.js";
import { validateCustomer } from "../middlewares/customers.middlewares.js";

const routers = Router();

routers.get("/customers", getCustomers);

routers.get("/customers/:id", getCustomersById);

routers.post("/customers", validateCustomer, postCustomers);

export default routers;
