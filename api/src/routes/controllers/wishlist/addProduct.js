const {Wishlist, Product} = require("../../../db");

const addProduct = async (req, res, next) => {
    let {productId, userId} = req.body;
    try{
        let wishlist = await Wishlist.findOrCreate({
            where:{
                UserId: userId,
            },
            defaults: {},
        });
        let product = await Product.findOne({
            where:{
                id: productId,
            }
        });
        await wishlist[0].addProduct(product);
        res.send(`${product.name} added to user's wishlist`);
    }catch(e){
        next(e);
    }
}

module.exports = {addProduct};