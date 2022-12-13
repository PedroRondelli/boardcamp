import { Router } from "express";
import {
  getCustomers,
  getCustomersById,
  postCustomers,
  updateCustomers,
} from "../controllers/customers.controllers.js";
import {
  validateCustomer,
  validateUpdateCustomer,
} from "../middlewares/customers.middlewares.js";

const routers = Router();

routers.get("/customers", getCustomers);

routers.get("/customers/:id", getCustomersById);

routers.post("/customers", validateCustomer, postCustomers);

routers.put("/customers/:id", validateUpdateCustomer, updateCustomers);

export default routers;
