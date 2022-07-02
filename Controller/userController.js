const UserModel=require("../Model/userModel")

//add User
module.exports.addUser=function(req,res){
    let flatNo=req.body.flatNo
    let role =req.body.role
    let firstName=req.body.firstName
    let lastName=req.body.lastName
    let dateOfBirth=req.body.dateOfBirth
    let age=req.body.age
    let gender=req.body.gender
    let contactNo=req.body.contactNo
    let email=req.body.email
    

    let user=new UserModel({
        "flatNo":flatNo,
        "role":role,
        "firstName":firstName,
        "lastName":lastName,
        "dateOfBirth":dateOfBirth,
        "age":age,
        "gender":gender,
        "contactNo":contactNo,
        "email":email,
    })

    user.save(function(err,data){
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
                "msg":"User Added!!"
            })
        }
    })
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
    UserModel.find().populate("role").exec(function(err,data){
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