const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors")
dotenv.config({path:path.join(__dirname,"config",".env")});
const PORT = process.env.PORT;
const { ConnectDatabase } = require("./config/database");





//importing router
const products = require("./routes/products");
const order = require("./routes/order");



ConnectDatabase();




//addind a middle ware for json convert
app.use(express.json());
app.use(cors());

//use the routers in middle ware
app.use("/api/jr/",products);
app.use("/api/jr/",order);


app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)
});