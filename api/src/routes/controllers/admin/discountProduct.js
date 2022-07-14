const {Product} = require("../../../db");

const  discountProduct = async (req, res, next) =>{
    let {productId, discount} = req.body;
    
    try{
        await Product.update({
            discount: discount,
        },{
           where:{id: productId,} 
        })
        res.send("Product has been given a discount!")
    }catch(e){
        next(e);
    }
}

module.exports = {discountProduct}