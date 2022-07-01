const nodemailer = require("nodemailer");
const {transporter} = require("./transporter")
const { Cart, User, Product } = require("../../../db")

async function orderConfirmation(req, res, next){
    let {cartID, userID} = req.body;
    try{
        let user = await User.findOne({
            attributes: ["email"],
            where:{
                id: userID,
            }
        })
        
        let order = Cart.findOne({
            where:{
            id: cartID,
            },
            include:[{
                model: Product,
                as: "Products",
                attributes:["id","name", "price"]
            }]
        })

        let productsBought = order.Products.map(prod => {return prod.name}).join(", ")
        let totalPrice =+ order.Products.forEach(prod => {return prod.price})
        console.log("Order: " + order)
        await transporter.sendMail({
            from: '"Order created!" <ritual.makeup.commerce@gmail.com>',
            to: user,
            subject: `Order number ${order.id} Confirmation`,
            html: `<p>Receipt of purchase, Order n° ${order.id}.<br>
            Price: ${totalPrice}<br>
            Products: ${productsBought}</p>`
          })
    }catch(e){
        next(e)
    }

};

module.exports = { orderConfirmation }