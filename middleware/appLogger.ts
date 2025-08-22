import express from "express"

let logger = (req:express.Request, res:express.Response, next:express.NextFunction) =>{
    let url = req.url
    let method = req.method
    let time = new Date().toLocaleString()  
    console.log(`${method} request to ${url} at ${time}`)
    next()
}

export default logger