const { Router } = require("express") 
const courseroute = Router()





courseroute.post("/purchase"  , (req,res)=>{
       res.json({
        msg : "You succesfully puchase this course"
       })
})


courseroute.get("/preview" , (req,res)=>{
    res.josn({
        msg : "here are the all courses "
    })
})






module.exports = {
    courseroute : courseroute
}