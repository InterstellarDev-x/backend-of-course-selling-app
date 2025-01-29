const { Router } = require("express")
const { z } = require("zod")
const { AdminModel } = require("../db")
const { CoursesModel } = require("../db")
const jwt = require("jsonwebtoken")
const { jwt_admin_secret  }  = require("../configure")
const bcrypt = require("bcrypt")
const { auth } = require("../middlewares/admin")


const adminroute = Router()


  adminroute.post("/signup" , async (req,res)=>{
    
             
       const signupbody = z.object({
        email : z.string().email(),
        password : z.string(),
        firstName : z.string(),
        lastName : z.string()
       })

       const signupbodysucces = signupbody.safeParse(req.body)
       

       if(!signupbodysucces.success){
        return res.json({
            msg : "Invalid format",
            error : signupbodysucces.error
        })
       }

        const email  = req.body.email
        const password = req.body.password
        const firstName = req.body.firstName
        const lastName = req.body.lastName

        
        try{

           const hashpassword  = await bcrypt.hash(password ,5)


            await AdminModel.create({
                email : email,
                password : hashpassword,
                firstName : firstName,
                lastName : lastName
            })

           return  res.json({
                msg : "you are signed Up succesfully"
            })
    
        }catch(e){
            return res.json({
                msg : "Error , please contact the website owner"
            })
        }
         
    
    })
    
adminroute.post("/signin" , async (req,res)=>{
    
        const email  = req.body.email
        const password = req.body.password

       const user = await AdminModel.findOne({
            email : email

        })

      if(!user){
        return res.json({
            msg : "Admin not found"
        })
      }

      const passwordsucces = bcrypt.compare(password , user.password)

      if(passwordsucces){
        const token  =  jwt.sign({
            id : user._id
        }, jwt_admin_secret)


       return res.json({
            msg : `Welcome ${user.firstName} to admin console`,
            token : token
        })
      }else {
        return res.json({
            msg : "Invalid credentials"
        })
      }
       
    })

adminroute.use(auth)


adminroute.post("/createcourse" , async (req,res)=>{
        
        const adminId = req.adminid
        const { tittle , description , price, imageURL } = req.body

        try{
            

           const course  =  await CoursesModel.create({
                tittle : tittle,
                description :description,
                price : price,
                imageURL : imageURL,
                creatorid : adminId
            }) 

            res.json({
                msg : "!! Course Added succesfully !!",
                courseId : "Here is Your Course id " + course._id
            })
        }catch(e){
            console.log("Error happening while adding courses")
            res.json({
                msg : "Error happening while adding the courses"
            })
        }
       
     })



    adminroute.post("/update/course" , async (req,res)=>{
        const adminId = req.adminid
        const { tittle , description , price, imageURL , courseId } = req.body
        try{
            const course = await CoursesModel.updateOne({
                creatorid : adminId,// this is the filter section , if it does not match than it will simply dont do anything 
                _id : courseId
            },{
                tittle : tittle,
                description : description,
                price : price,
                imageURL : imageURL
            })

        console.log(course)
    
            return res.json( {
                msg : "Course Updated Successfully"
            })
        }catch(e){
            return res.json({
                msg : "Courses not updated"
            })
        }
     })



    adminroute.get("/course/bulk" , async (req,res)=>{
        const adminId = req.adminid
        const courses = await CoursesModel.find({
            creatorid : adminId
        })

        res.json({
            courses
        })
        
     })


    




module.exports = {
  adminroute : adminroute
}

