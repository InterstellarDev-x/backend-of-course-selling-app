require('dotenv').config()
const cors = require("cors")
const express = require("express")
const { userrouter }  = require("./routes/userRoutes")
const { adminroute } = require("./routes/adminroute")
const { courseroute } = require("./routes/course")
const mongoose = require("mongoose")



const app = express()

app.use(cors())
app.use(express.json())
app.use("/user" ,   userrouter)
app.use("/admin" , adminroute)
app.use("/course" , courseroute)


async function connect(){
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000)   
    console.log("Listening on port 3000")
}

connect()
// store the the data base string in dot env file 