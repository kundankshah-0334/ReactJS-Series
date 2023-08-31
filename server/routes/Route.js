import express from "express";
import { adduser , getuser , getSingleUser} from "../controller/user_controller.js";
const route = express.Router();

route.post("/add" , adduser);
route.get("/all" , getuser);
route.get("/:id" , getSingleUser);
export default route;