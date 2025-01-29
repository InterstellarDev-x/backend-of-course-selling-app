const jwt = require("jsonwebtoken")
const { jwt_admin_secret }  = require("../configure")

function auth(req,res,next){  
    const token = req.headers.token
    const verify = jwt.verify(token, jwt_admin_secret)
    if(verify){
      req.adminid = verify.id
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