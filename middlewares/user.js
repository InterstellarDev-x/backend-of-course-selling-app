const jwt = require("jsonwebtoken")
const {  jwt_user_secret }  = require("../configure")

function auth(req,res,next){  
    console.log("reach here")
    const token = req.headers.token
    const verify = jwt.verify(token, jwt_user_secret)
    if(verify){
      console.log(verify.id)
      req.userid = verify.id
       next()
    }else {
       res.staus(403).json({
           msg : "Admin is not logged in"
       })
    }
  }


  module.exports = {
    auth : auth
  }