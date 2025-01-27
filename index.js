const express = require("express")
const { userrouter }  = require("./routes/userRoutes")
const { courseroute } = require("./routes/course")

const app = express()


app.use(express.json())
app.use("/user" ,   userrouter)
app.use("/course" , courseroute)



app.listen(3000)


