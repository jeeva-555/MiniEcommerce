const { ordermodel } = require("../models/ordermodel");


exports.postorder = async(req,res,next)=>{
    const cartitem = req.body
    const amount = cartitem.reduce((acc,item)=>{
        return(
            acc+item.product.price*item.qty
        )
    },0);
    const parsedamount = parseInt(amount);
    const status = "pending";

    await ordermodel.create({cartitem,amount:parsedamount,status});
    res.json({
        success : true,
        msg : "ordercreated"
    }
    )
}