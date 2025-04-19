const mongoose = require("mongoose");

const orderschema = new mongoose.Schema({
    cartitem : Array,
    amount : String,
    status : String,
    createdat : Date
});

exports.ordermodel = mongoose.model("orders",orderschema);