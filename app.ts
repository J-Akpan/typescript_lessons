import express from "express"
import userRoute from "./routes/userRouter"
import venueRouter from "./routes/venueRoute";
import appLogger from "./middleware/appLogger";

const app:express.Application = express();


// port definition
const port: number = 3000

// configure form data
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(appLogger)


// route to the home page 
app.get('/', (req:express.Request, res:express.Response) => {
    res.status(200).json({msg: "welcoms to our application"})
})

app.use('/user', userRoute)
app.use('/venue', venueRouter )


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})