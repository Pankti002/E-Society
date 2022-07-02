const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    dateOfBirth:Date,
    age:Number,
    gender:String,
    contactNo:Number,
    email:String,
    password:String,
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    }
})
module.exports=mongoose.model("User",userSchema)