const houseModel = require("../model/houseModel")

//addHouse

module.exports.addHouse = function (req, res) {
    let houseDetails = req.body.houseDetails;

    let house = new houseModel({
        "houseDetails": houseDetails
    })

    house.save(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "House Added!!"
            })
        }
    })
}

//getAllHouses
module.exports.getAllHouses = function (req, res) {
    houseModel.find(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Houses Retrived!!"
            })
        }
    })
}



//update House
module.exports.updateHouse = function (req, res) {
    let houseId = req.body.houseId
    let houseDetails = req.body.houseDetails

    houseModel.updateOne({ _id: houseId }, { houseDetails: houseDetails }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "House Updated!!"
            })
        }
    })
}



//deleteHouse
module.exports.deletehouse = function (req, res) {
    let houseId = req.body.houseId
    houseModel.deleteOne({ _id: houseId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Somethong went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "House Deleted!!"
            })
        }
    })
}