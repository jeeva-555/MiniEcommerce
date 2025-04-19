const app = require("express")();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({path:path.join(__dirname,"config",".env")});
const PORT = process.env.PORT || 3000;
const { ConnectDatabase } = require("./config/database");





//importing router
const products = require("./routes/products");
const order = require("./routes/order");



ConnectDatabase();






//use the routers in middle ware
app.use("/api/jr/",products);
app.use("/api/jr/",order);


app.listen(PORT,()=>{
    console.log(`connected to port ${PORT}`)
});