const StaffModel=require("../Model/staffModel")
const validator=require("validator")

//add Staff
module.exports.addStaff=function(req,res){
    let staffMemberName=req.body.staffMemberName
    let type=req.body.type
    let entryTime=req.body.entryTime
    let exitTime=req.body.exitTime
    let contactNo=req.body.contactNo
    let address=req.body.address
    let agencyName=req.body.agencyName
    let agencyContactNumber=req.body.agencyContactNumber

    let isError=false;
    let err=[];


    let staff=new StaffModel({
        "staffMemberName":staffMemberName,
        "type":type,
        "entryTime":entryTime,
        "exitTime":exitTime,
        "contactNo":contactNo,
        "address":address,
        "agencyName":agencyName,
        "agencyContactNumber":agencyContactNumber
    })


    if(validator.isAlpha(staffMemberName)==false || staffMemberName.trim().length==0)
    {
        isError=true;
        err.push({
            "staffMemberName Error":"Please Enter Valid Name"
        })
    }
    if(validator.isAlpha(type)==false || type.trim().length==0)
    {
        isError=true;
        err.push({
            "Type Error":"Please Enter Valid Type"
        })
    }
    //time validation
    if(entryTime==undefined)
    {
        isError=true;
        err.push({
            "EntryTime Error":"Please Enter Valid Time"
        })
    }

    let len=contactNo.length
    if(validator.isNumeric(contactNo.toString())==false || len != 10)
    {
        isError=true;
        err.push({
            "ContactNo Error":"Please Enter Valid ContactNo"
        })
    }
    if(validator.isAlpha(address)==false || address.trim().length==0)
    {
        isError=true;
        err.push({
            "Address Error":"Please Enter Valid Address"
        })
    }
   
    if(validator.isAlpha(agencyName)==false || agencyName.trim().length==0)
    {
        isError=true;
        err.push({
            "AgencyName Error":"Please Enter Valid AgencyName"
        })
    }
    let leng=agencyContactNumber.length
    if(validator.isNumeric(agencyContactNumber.toString())==false || leng != 10)
    {
        isError=true;
        err.push({
            "Agency ContactNo Error":"Please Enter Valid Agency ContactNo"
        })
    }

    if(isError)
    {
        res.json({
            "status":-1,
            "data":err,
            "msg":"Something went Wrong..."
        })
    }
    else
    {
        staff.save(function(err,data){
            if(err)
            {
                console.log(err)
                res.json({
                    "status":-1,
                    "data":err,
                    "msg":"Something went Wrong..!!"
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
    let agencyName=req.body.agencyName
    let agencyContactNumber=req.body.agencyContactNumber

    let isError=false;
    let err=[];

    if(validator.isAlpha(staffMemberName)==false || staffMemberName.trim().length==0)
    {
        isError=true;
        err.push({
            "staffMemberName Error":"Please Enter Valid Name"
        })
    }
    // if(validator.isAlpha(type)==false || type.trim().length==0)
    // {
    //     isError=true;
    //     err.push({
    //         "Type Error":"Please Enter Valid Type"
    //     })
    // }
    //time validation

    let len=contactNo.length
    if(validator.isNumeric(contactNo.toString())==false || len != 10)
    {
        isError=true;
        err.push({
            "ContactNo Error":"Please Enter Valid ContactNo"
        })
    }
    if(validator.isAlpha(address)==false || address.trim().length==0)
    {
        isError=true;
        err.push({
            "Address Error":"Please Enter Valid Address"
        })
    }
    if(validator.isAlpha(agencyName)==false || agencyName.trim().length==0)
    {
        isError=true;
        err.push({
            "AgencyName Error":"Please Enter Valid AgencyName"
        })
    }
    let leng=agencyContactNumber.length
    if(validator.isNumeric(agencyContactNumber.toString())==false || leng != 10)
    {
        isError=true;
        err.push({
            "Agency ContactNo Error":"Please Enter Valid Agency ContactNo"
        })
    }

    if(isError)
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
        StaffModel.updateOne({_id:staffId},{staffMemberName:staffMemberName, type:type,entryTime:entryTime, exitTime:exitTime,
            contactNo:contactNo,address:address, agencyName:agencyName, agencyContactNumber:agencyContactNumber 
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

}


//Delete Staff
module.exports.deleteStaff = function (req, res) {
    let staffId = req.params.staffId

    StaffModel.deleteOne({ _id: staffId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong..."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Staff Member Deleted!!"
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