const {Product} = require("../../../db");

const discountProduct = (req, res, next) =>{
    let {productId, discount} = req.body;
    try{
        await Product.update({
            discount: discount,
        },{
            id: productId,
        })
        res.send("Product has been given a discount!")
    }catch(e){
        next(e);
    }
}

module.exports = {discountProduct}