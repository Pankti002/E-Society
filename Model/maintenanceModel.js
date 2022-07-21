const mongoose=require("mongoose")

const maintenanceSchema=new mongoose.Schema({
    creationDate:String,
    month:String,
    maintenanceAmount:Number,
    maintenancePaid:Boolean,
    paymentDate:String,
    lastDate:String,
    penalty:Number,
    house:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"House"
    }
})

module.exports=mongoose.model("Maintenance",maintenanceSchema)