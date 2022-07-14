const nodemailer = require("nodemailer");
const {Product, Wishlist, User, Product_Wishlist} = require("../../../db");
const {transporter} = require("./transporter");
const { Op } = require("sequelize");

const discountOffer = async (req, res, next) =>{
    try{
        let arrayPromises = [];
        let wishlistIds
        let discProducts
        let wishlists
        let users
        discProducts = await Product.findAll({
            where:{
                discount:{
                    [Op.not]: 0,
                }
            }
        });
        discProducts = discProducts.map(prod => {return prod.id})
        wishlistIds = await Product_Wishlist.findAll({
            where:{
                ProductId:{
                    [Op.in]: discProducts,
                }
            }
        });
        wishlistIds = wishlistIds.map(id => {return id.WishlistId})
        wishlists = await Wishlist.findAll({
            where:{
                id:{
                    [Op.in]: wishlistIds,
                }
            }
        });
        wishlists = wishlists.map(list => {return list.UserId})
        users = await User.findAll({
            where:{
                id:{
                    [Op.in]: wishlists,
                }
            },
            attributes: ["email"]
        });
        users.forEach(user => {
            arrayPromises.push(arrayPromises.push(transporter.sendMail({
                from: '"A product in your wishlist!"<ritual.makeup.commerce@gmail.com>',
                to: user.email,
                subject: `A product in your Wishlist is discounted!`,
                html:`<p>Check out your wishlist for new offers at <a href="https://pg-ecommerce-client.vercel.app/">Ritual</a>!.
                Don't miss out on these <b>NEW DEALS</b> JUST FOR YOU 🎁🎁!</p>`
              }, (err, info) => {
                if (err) {
                  res.status(400).send(err.message);
                } else {
                  res.status(200).json(info);
                }})
            ))
        })
        await Promise.all(arrayPromises)
    }catch(e){
        next(e);
    }
}

module.exports = {discountOffer}