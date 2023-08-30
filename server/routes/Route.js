import express from "express";
import { adduser } from "../controller/user_controller.js";
const route = express.Router();

route.post("/add" , adduser)
export default route;