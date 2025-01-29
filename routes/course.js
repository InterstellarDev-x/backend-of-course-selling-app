const { Router } = require("express") 
const courseroute = Router()
const { PurchasesModel } = require("../db")
const { CoursesModel } = require("../db")
const { auth } = require("../middlewares/user")




courseroute.post("/purchase"  ,auth, async (req,res)=>{
       const userid = req.userid;
       const courseid = req.body.courseid;
       try{
        await PurchasesModel.create({
            userid : userid,
            courseid : courseid
         })
  
  
         return res.json({
            msg : "You succesfully bought the course"
         })
       }catch(e){
        return res.json({
            msg : "Error happeing while buying the courses"
        } )
       }
})


courseroute.get("/preview" , async (req,res)=>{

      const courses = await CoursesModel.find({})
      console.log(courses)
      res.json({
        course : courses
      })
})


module.exports = {
    courseroute : courseroute
}