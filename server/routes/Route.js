import express from "express";
import { adduser , getuser , getSingleUser} from "../controller/user_controller.js";
import { editUser , deleteUser } from "../controller/user_controller.js";
const route = express.Router();

route.post("/add" , adduser);
route.get("/all" , getuser);
route.post("/:id" , editUser);
route.get("/:id" , getSingleUser);
route.delete("/:id" , deleteUser);
export default route;