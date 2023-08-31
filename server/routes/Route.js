import express from "express";
import { adduser , getuser } from "../controller/user_controller.js";
const route = express.Router();

route.post("/add" , adduser);
route.get("/all" , getuser);
export default route;