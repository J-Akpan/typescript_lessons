import express from "express"
import userController from "../controllers/userController"
import appLogger from "../middleware/appLogger"

const usersRoute:express.Router = express.Router()


usersRoute.get("/", userController.usersGreetings)
usersRoute.post("/register", userController.userRegister)



export default usersRoute