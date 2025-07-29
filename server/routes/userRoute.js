import express from 'express';
import { create, deleteUser, getAllUsers, getUserById, updateUser } from '../controller/userController.js';

const route = express.Router();

route.post("/create", create);
route.get("/getAllUsers", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/user/:id", updateUser);
route.delete("/user/:id", deleteUser);


export default route;