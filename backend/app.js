const app = require("express")();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({path:path.join(__dirname,"config",".env")});


//importing router
const products = require("./routes/products");
const order = require("./routes/order");




//use the routers in middle ware
app.use("/api/jr/",products);
app.use("/api/jr/",order);


app.listen(process.env.PORT,()=>{
    console.log(`connected to port ${process.env.port}`)
});