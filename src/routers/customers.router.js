import { Router } from "express";
import { getCustomers } from "../controllers/customers.controllers.js";

const routers = Router();

routers.get("/customers", getCustomers);

routers.get("customers/:id",getCustomersById)

export default routers;
