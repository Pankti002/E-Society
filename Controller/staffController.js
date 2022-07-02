const StaffModel=require("../Model/staffModel")

//add Staff
module.exports.addStaff=function(req,res){
    let staffMemberName=req.body.staffMemberName
    let type=req.body.type
    let entryTime=req.body.entryTime
    let exitTime=req.body.exitTime
    let contactNo=req.body.contactNo
    let address=req.body.address
    let email=req.body.email
    let password=req.body.password
    let isAllowed=req.body.isAllowed
    let agencyName=req.body.agencyName
    let agencyContactNumber=req.body.agencyContactNumber


    let staff=new StaffModel({
        "staffMemberName":staffMemberName,
        "type":type,
        "entryTime":entryTime,
        "exitTime":exitTime,
        "contactNo":contactNo,
        "address":address,
        "email":email,
        "password":password,
        "isAllowed":isAllowed,
        "agencyName":agencyName,
        "agencyContactNumber":agencyContactNumber
    })

    staff.save(function(err,data){
        if(err)
        {
            console.log(err)
            res.json({
                "status":-1,
                "data":err,
                "msg":"Something went Wrong..."
            })
        }
        else
        {
            res.json({
                "status":200,
                "data":data,
                "msg":"Staff Member Added!!"
            })
        }
    })
}



//update Staff
module.exports.updateStaff=function(req,res){
    let staffId=req.body.staffId
    let staffMemberName=req.body.staffMemberName
    let type=req.body.type
    let entryTime=req.body.entryTime
    let exitTime=req.body.exitTime
    let contactNo=req.body.contactNo
    let address=req.body.address
    let email=req.body.email
    let password=req.body.password
    let isAllowed=req.body.isAllowed
    let agencyName=req.body.agencyName
    let agencyContactNumber=req.body.agencyContactNumber

    StaffModel.updateOne({_id:staffId},{staffMemberName:staffMemberName, type:type,entryTime:entryTime, exitTime:exitTime,
        contactNo:contactNo,address:address, email:email, password:password, isAllowed:isAllowed, agencyName:agencyName, agencyContactNumber:agencyContactNumber 
    },function(err,data){
        if(err)
        {
            console.log(err)
            res.json({
                "status":-1,
                "data":err,
                "msg":"Something went Wrong..."
            })
        }
        else
        {
            res.json({
                "status":200,
                "data":data,
                "msg":"Staff Member Updated!!"
            })
        }
    })

}


//Delete Staff
module.exports.deleteStaff=function(req,res){
    let staffId=req.body.staffId

    StaffModel.deleteOne({_id:staffId},function(err,data){
        if(err)
        {
            console.log(err)
            res.json({
                "status":-1,
                "data":err,
                "msg":"Something went Wrong..."
            })
        }
        else
        {
            res.json({
                "status":200,
                "data":data,
                "msg":"Staff Member Deleted!!"
            })
        }
    })

}


//List Staff
module.exports.getAllStaff=function(req,res){
    StaffModel.find(function(err,data){
        if(err)
        {
            console.log(err)
            res.json({
                "status":-1,
                "data":err,
                "msg":"Something went Wrong..."
            })
        }
        else
        {
            res.json({
                "status":200,
                "data":data,
                "msg":"Staff Members Retrived!!"
            })
        }
    })
}