const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    name : String,
    price : String,
    description : String,
    ratings : String,
    images : [{image:String}],
    category : String,
    seller : String,
    stock : Number,
    createdAt : Date,
})

const productmodel = mongoose.model("products",productschema);

module.exports = productmodel;