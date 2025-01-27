const { Router } = require("express")

const userrouter = Router()


    userrouter.post("/signup" , async (req,res)=>{
    
        return res.json({
               msg : "You are signed up"
           })
         
    
    })
    
    userrouter.post("/login" , (req,res)=>{
    
       res.json({
           msg : "User is logged in"
       })
       
    })



module.exports = {
  userrouter : userrouter
}

