const {Product} = require("../../../db");

<<<<<<< HEAD
const  discountProduct = async (req, res, next) =>{
    let {productId, discount} = req.body;
    
=======
const discountProduct = (req, res, next) =>{
    let {productId, discount} = req.body;
>>>>>>> RITUAL
    try{
        await Product.update({
            discount: discount,
        },{
<<<<<<< HEAD
           where:{id: productId,} 
=======
            id: productId,
>>>>>>> RITUAL
        })
        res.send("Product has been given a discount!")
    }catch(e){
        next(e);
    }
}

module.exports = {discountProduct}