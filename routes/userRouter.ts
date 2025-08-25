import express from "express"
import userController from "../controllers/userController"
import appLogger from "../middleware/appLogger"
import userValidation from "../middleware/userValidation"

const usersRoute:express.Router = express.Router()


usersRoute.get("/", userController.usersGreetings)
usersRoute.post("/register", userValidation, userController.userRegister)



export default usersRoute