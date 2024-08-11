import express from "express"
import { signup,login } from "../Controllers/user.controller.js"


const Router=express.Router()
Router.post("/signup",signup)
Router.post("/login",login)




export default Router


