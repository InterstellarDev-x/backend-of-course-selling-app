const { Router } = require("express")
const { z } = require("zod")
const { UserModel } = require("../db")
const jwt = require("jsonwebtoken")
const  { jwt_user_secret }  = require("../configure")
const bcrypt = require("bcrypt")
const userrouter = Router()
const { auth } = require("../middlewares/user")
    

   

    userrouter.post("/signup" , async (req,res)=>{
         
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


            await UserModel.create({
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
                msg : "Error , please contact the admin"
            })
        }
    
    })
    
    userrouter.post("/login" ,async (req,res)=>{
        
        const email  = req.body.email
        const password = req.body.password

       const user = await UserModel.findOne({
            email : email

        })

      if(!user){
        return res.json({
            msg : "User not found"
        })
      }

      const passwordsucces = bcrypt.compare(password , user.password)

      if(passwordsucces){
        const token  =  jwt.sign({
            id : user._id
        }, jwt_user_secret)


       return res.json({
            msg : "you are loged in ",
            token : token
        })
      }else {
        return res.json({
            msg : "Invalid credentials"
        })
      }
       
    })
 
userrouter.use(auth)

    userrouter.get("/purchases" , (req,res)=>{
    
        res.json({
            msg : "here are your are courses"
        })
    
    })



    
module.exports = {
  userrouter : userrouter
}

