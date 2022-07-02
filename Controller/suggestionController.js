const suggestionModel = require("../model/suggestionModel")


// add suggestion
module.exports.addSuggestion = function (req, res) {
    let suggestionNo = req.body.suggestionNo
    let date = req.body.date
    let memberName = req.body.memberName
    let suggestions = req.body.suggestions
    let reason = req.body.reason


    let suggestion = new suggestionModel({
        "suggestionNo": suggestionNo,
        "date": date,
        "memberName": memberName,
        "suggestions": suggestions,
        "reason": reason
    })

    suggestion.save(function (err, data) {
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
                "msg": "Suggestion Added!!"
            })
        }
    })
}

// Update Suggestion
module.exports.updateSuggestion = function (req, res) {

    let suggestionNo = req.body.suggestionNo
    let date = req.body.date
    let memberName = req.body.memberName
    let suggestions = req.body.suggestions
    let reason = req.body.reason

    suggestionModel.updateOne({ _id: suggestionNo }, { date: date, memberName: memberName, suggestions: suggestions, reason: reason }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Information Updated!!"
            })
        }
    })

}

//Delete Suggestion
module.exports.deleteSuggestion = function (req, res) {
    let suggestionNo = req.body.suggestionNo

    suggestionModel.deleteOne({ _id: suggestionNo }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Suggestion Deleted!!"
            })
        }
    })
}

//List Suggestion
module.exports.getAllSuggestions = function (req, res) {
    suggestionModel.find(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Suggestions Retrived!!"
            })
        }
    })
}