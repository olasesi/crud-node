import express from "express";
import { getUsers, updateUser } from "../../controllers/UserController.js";

const route = express.Router();

route.get("/", getUsers);
route.patch("/:id", updateUser);

export default route;
