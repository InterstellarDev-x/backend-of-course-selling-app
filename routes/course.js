const { Router } = require("express") 
const courseroute = Router()

courseroute.get("/purchases" , (req,res)=>{
    
    res.json({
        msg : "here are your are courses"
    })

})

courseroute.post("/purchase"  , (req,res)=>{
       res.json({
        msg : "You succesfully puchase this course"
       })
})


courseroute.get("/courses" , (req,res)=>{
    res.josn({
        msg : "here are the all courses from this seller"
    })
})



module.exports = {
    courseroute : courseroute
}