const productmodel = require("../models/productmodel")


exports.getproducts = async(req,res,next)=>{
    const query = req.query.keyword?{name:{
        $regex : req.query.keyword,
        $options : "i"
    }}:{};


    const products = await productmodel.find(query);

    res.json(
        products
    )
};

exports.getsingleproduct = async(req,res,next)=>{

    try {
        const id = req.params.id;
        const product = await productmodel.findById(id);
        res.json(
            product
        );
    } catch (err) {
        res.json(
            {
                success : false,
                msg : "no products found"
            }
        );
    }

    
  
}