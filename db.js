const mongoose = require("mongoose")
const schema = mongoose.Schema
const ObjectId = mongoose.ObjectId


const Users = new schema({
    name : String,
    email : {
        type : String,
        unique : true
     },
    password : String
})

const UserModel = mongoose.model("users" , Users)

module.exports = UserModel