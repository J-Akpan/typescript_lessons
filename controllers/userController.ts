import express from "express"

const usersGreetings = ((req:express.Request, res:express.Response) =>{
    return res.status(200).json({msg : "our controller is working"})
})

const userRegister = ((req:express.Request, res:express.Response) => {
    const formData = req.body
    return res.status(200).json({
        msg:"user registration successful",
        "formData":formData
    })

})

export default {
    usersGreetings,
    userRegister
}