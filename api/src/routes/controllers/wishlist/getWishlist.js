const {Wishlist, Product} = require("../../../db");

const getWishlist = async (req, res, next) => {
    let {userId} = req.params;
    try{
        let wishlist = await Wishlist.findOrCreate({
            include: {
                model: Product,
                through: {attributes: []}
            },
            where:{
                UserId: userId,
            },
            defaults:{},
        })
        res.json(wishlist)
    }catch(e){
        next(e);
    }
}

module.exports = {getWishlist}