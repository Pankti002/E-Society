const UserModel=require("../Model/userModel")
const validator=require("validator")

//add User
module.exports.addUser=function(req,res){
    let role =req.body.role
    let house =req.body.house
    let firstName=req.body.firstName
    let lastName=req.body.lastName
    let dateOfBirth=req.body.dateOfBirth
    let age=req.body.age
    let gender=req.body.gender
    let contactNo=req.body.contactNo
    let email=req.body.email
    let password=req.body.password

    
    let user=new UserModel({
        "role":role,
        "house":house,
        "firstName":firstName,
        "lastName":lastName,
        "dateOfBirth":dateOfBirth,
        "age":age,
        "gender":gender,
        "contactNo":contactNo,
        "email":email
    })

    let isError=false;
    let err=[];

    if(validator.isAlpha(firstName)==false || firstName.trim().length==0)
    {
        isError=true;
        err.push({
            "FirstName Error":"Please Enter Valid Name"
        })
    }
    if(validator.isAlpha(lastName)==false || lastName.trim().length==0)
    {
        isError=true;
        err.push({
            "LastName Error":"Please Enter Valid Name"
        })
    }
    if(validator.isDate(dateOfBirth)==false)
    {
        isError=true;
        err.push({
            "DateOfBirth Error":"Enter Valid Date"
        })
    }
    if(validator.isNumeric(age.toString())==false)
    {
        isError=true;
        err.push({
            "Age Error":"Please Enter Valid Age"
        })
    }
    if(gender.toLowerCase()!="male" && gender.toLowerCase()!="female" )
    {
        isError=true;
        err.push({
            "Gender Error":"Please Enter Valid Gender"
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
    if(validator.isEmail(email)==false)
    {
        isError=true;
        err.push({
            "Email Error":"Please Enter Valid Email"
        })
    }
    if(validator.isAlpha(password)==false || password.trim().length==0)
    {
        isError=true;
        err.push({
            "Password Error":"Please Enter Valid Password"
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
        user.save(function(err,data){
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
                    "msg":"User Added!!"
                })
            }
        })
    }
}




//Update User
module.exports.updateUser=function(req,res){
    let userId=req.body.userId
    let firstName=req.body.firstName
    let lastName=req.body.lastName
    let dateOfBirth=req.body.dateOfBirth
    let age=req.body.age
    let gender=req.body.gender
    let contactNo=req.body.contactNo
    let email=req.body.email
    let password=req.body.password

    let isError=false;
    let err=[];

    if(validator.isAlpha(firstName)==false || firstName.trim().length==0)
    {
        isError=true;
        err.push({
            "FirstName Error":"Please Enter Valid Name"
        })
    }
    if(validator.isAlpha(lastName)==false || lastName.trim().length==0)
    {
        isError=true;
        err.push({
            "LastName Error":"Please Enter Valid Name"
        })
    }
    if(validator.isDate(dateOfBirth)==false)
    {
        isError=true;
        err.push({
            "DateOfBirth Error":"Enter Valid Date"
        })
    }
    if(validator.isNumeric(age.toString())==false)
    {
        isError=true;
        err.push({
            "Age Error":"Please Enter Valid Age"
        })
    }
    if(gender.toLowerCase()!="male" && gender.toLowerCase()!="female" )
    {
        isError=true;
        err.push({
            "Gender Error":"Please Enter Valid Gender"
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
    if(validator.isEmail(email)==false)
    {
        isError=true;
        err.push({
            "Email Error":"Please Enter Valid Email"
        })
    }
    if(validator.isAlpha(password)==false || password.trim().length==0)
    {
        isError=true;
        err.push({
            "Password Error":"Please Enter Valid Password"
        })
    }



    if(isError)
    {
        res.json({
            "status":-1,
            "data":err,
            "msg":"Something went Wrong...."
        })
    }
    else
    {
        UserModel.updateOne({_id:userId},{firstName:firstName,lastName:lastName,dateOfBirth:dateOfBirth,age:age,gender:gender,contactNo:contactNo,email:email},function(err,data){
            if(err){
                console.log(err)
                res.json({
                    "status":-1,
                    "data":err,
                    "msg":"Something went Wrong...."
                })
            }
            else{
                res.json({
                  "status":200,
                    "data":data,
                    "msg":"User Information Updated!!"
                })
            }
        })
    }
}



//Delete User
module.exports.deleteUser=function(req,res){
    let userId=req.body.userId
    
    UserModel.deleteOne({_id:userId},function(err,data){
        if(err){
            console.log(err)
            res.json({
                "status":-1,
                  "data":err,
                  "msg":"Something went Wrong...."
              })
        }
        else{
            res.json({
                "status":200,
                  "data":data,
                  "msg":"User Information Deleted!!"
              })
        }
    })
}


//List Mmebers
module.exports.getAllUsers=function(req,res){
    UserModel.find().populate("role").populate("house").exec(function(err,data){
        if(err){
            console.log(err)
            res.json({
                "status":-1,
                  "data":err,
                  "msg":"Something went Wrong...."
              })
        }
        else{
            res.json({
                "status":200,
                  "data":data,
                  "msg":"Users Retrived!!"
              })
        }
    })
}