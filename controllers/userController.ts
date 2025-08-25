import express from "express"
import bcrypt from "bcryptjs"

const usersGreetings = ((req:express.Request, res:express.Response) =>{
    return res.status(200).json({msg : "our controller is working"})
})

const userRegister = (async (req:express.Request, res:express.Response) => {
    const {name, email ,password } = req.body
    try {
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        return res.status(200).json({name, email, password: hashed})
        
    } catch (error) {
        return res.status(500).json(error)
    }
    
       

})

export default {
    usersGreetings,
    userRegister
}