const mongoose = require("mongoose")
const schema = mongoose.Schema
const ObjectId = mongoose.ObjectId


const Users = new schema({
    email : {
        type : String,
        unique : true
     },
    password : String,
    firstName : String,
    lastName : String
})

const admin = new schema({
    email : {
        type : String,
        unique : true
     },
    password : String,
    firstName : String,
    lastName : String
})


const courses = new schema({
    tittle : String,
    description : String,
    price : Number,
    imageURL : String,
    creatorid : ObjectId
})

const Purchases = new schema({
    userid : ObjectId,
    courseid : ObjectId
})

const UserModel = mongoose.model("users" , Users)
const AdminModel = mongoose.model("admin" , admin)
const CoursesModel = mongoose.model("courses" , courses)
const PurchasesModel = mongoose.model("purchases" , Purchases)


module.exports = {
   UserModel : UserModel,
   AdminModel : AdminModel,
   CoursesModel : CoursesModel,
   PurchasesModel : PurchasesModel
}