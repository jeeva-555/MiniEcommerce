const app = require("express")();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({path:path.join(__dirname,"config",".env")});


app.listen(process.env.PORT,()=>{
    console.log(`connected to port ${process.env.port}`)
});