const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

const jwt_secret = "I-am-aditya"


app.use(express.json())









app.post("/user/signup" , (req,res)=>{
       res.json({
        msg : "User is signed Up"
       })
})

app.post("/user/login" , (req,res)=>{

    res.json({
        msg : "User is logged in"
    })
    
})


app.get("/course/purchases" , (req,res)=>{
    
    res.json({
        msg : "here are your are courses"
    })

})

app.post("/course/purchase"  , (req,res)=>{
       res.json({
        msg : "You succesfully puchase this course"
       })
})


app.get("/Courses" , (req,res)=>{
    res.josn({
        msg : "here are the all courses from this seller"
    })
})


app.listen(3000)


