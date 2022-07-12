const {Wishlist, Product} = require("../../../db");

const removeProduct = async (req, res, next)=>{
    let {prodId, userId} = req.body;
    try{
        let wishlist = await Wishlist.findOne({
            where:{
                UserId: userId,
            }
        });
        let productToRemove = await Product.findOne({
            where:{
                id: prodId,
            }
        });
        await wishlist.removeProduct(productToRemove)
        res.send(`${productToRemove.name} has been successfully removed!`)
    }catch(e){
        next(e);
    }
}

module.exports = {removeProduct};