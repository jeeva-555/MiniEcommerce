const mongoose = require("mongoose");

exports.ConnectDatabase = ()=>{
    mongoose.connect(process.env.database).then(()=>{
        console.log('database connected');
    })
}