const mongoose = require("mongoose")

const houseSchema = new mongoose.Schema({
    houseDetails: String,

})

module.exports = mongoose.model("House", houseSchema)