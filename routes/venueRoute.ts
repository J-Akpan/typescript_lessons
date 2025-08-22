import express from "express"

const venueRouter:express.Router = express.Router()

venueRouter.get('/', (req:express.Request, res:express.Response)=>{
    return res.status(200).json({msg : "Welcome to our venue today"})

})


export default venueRouter