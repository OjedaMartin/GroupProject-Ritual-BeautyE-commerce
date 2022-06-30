const nodemailer = require("nodemailer");
const transporter = require("../../mail")
const { Order, User, Product_Order, Product } = require("../../../db")

async function orderConfirmation(req, res, next){
    let {orderID, userID} = req.body;
    try{
        const transporter = nodemailer.createTransport({
            port: 587,
            secure: false,
        })

        let user = await User.findOne({
            attributes: ["email"],
            where:{
                id: userID,
            }
        })
        console.log(JSON.stringify(user))
        
        // let order = Order.findOne({
        //     where:{
        //     id: orderID,
        //     },
        //     include:[{
        //         model: Product,
        //         as: "Products",
        //         attributes:["id","name"]
        //     }]
        // })
        // let productsBought = order.Products.map(prod => {return prod.name}).join(", ")
        // console.log("Order: " + order)
        
        let message = {
            from: "ritualsupport@gmail.com",
            to: user,
            subject: `Order number ${order.id} Confirmation`,
            text: `Receipt of purchase, Order n° ${order.id}.
            Date of Purchase: ${order.createdAt}
            Price: ${order.price}
            Products: ${productsBought}`,
            html: `<p>Receipt of purchase, Order n° ${order.id}.<br>
            Date of Purchase: ${order.createdAt}<br>
            Price: ${order.price}<br>
            Products: ${productsBought}</p>`
          };
        transporter.sendMail(message)
    }catch(e){
        next(e)
    }

};

module.exports = { orderConfirmation }