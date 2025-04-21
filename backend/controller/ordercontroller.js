const { ordermodel } = require("../models/ordermodel");
const productmodel = require("../models/productmodel");


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

    const idarray = cartitem.map((item)=>item.product._id);
    const products = await productmodel.find({_id:{$in:idarray}});

    for(let i=0;i<cartitem.length;i++){
        for(let j=0;j<products.length;j++){
            if(cartitem[i].product._id==products[j]._id){
                let updatedquantity = products[j].stock-parseInt(cartitem[i].qty);
                await productmodel.updateOne({_id:products[j]._id},{stock:updatedquantity});
            }
        }
    }

    console.log("updated quantity");
        

    res.json({
        success : true,
        msg : "ordercreated"
    }
    )
}