import express from 'express';
import { create, deleteUser, getAllUsers, getUserById, updateUser } from '../controller/userController.js';

const route = express.Router();

route.post("/create", create);
route.get("/getAllUsers", getAllUsers);
route.get("/getUser/:id", getUserById);
route.put("/updateUser/:id", updateUser);
route.delete("/deleteUser/:id", deleteUser);


export default route;