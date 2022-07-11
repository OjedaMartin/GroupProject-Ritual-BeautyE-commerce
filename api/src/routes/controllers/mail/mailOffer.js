const nodemailer = require("nodemailer");
const {User, FooterUser} = require("../../../db")
const {transporter} = require("./transporter")

async function offerAvailable(req, res, next){
    let arrayPromises = [];
    try{
        let users = await User.findAll({
            attributes: ["email"],
        },{
            where:{
                subscribed: true,
            }
        })
        let footer = await FooterUser.findAll({
            attributes: ["email"],
        })
        users = [...users, ...footer];

        users.forEach(user=>{
            arrayPromises.push(transporter.sendMail({
                from: '"Offers available!"<ritual.makeup.commerce@gmail.com>',
                to: user.email,
                subject: `There are new offers from Ritual Make-up Store!`,
                html:`<p>Check out our new offers available at our webpage <a href="https://pg-ecommerce-client.vercel.app/">Ritual</a>!.
                Don't miss out on these NEW <b>HOT DEALS</b>🔥🔥🔥!</p>`
              }, (err, info) => {
                if (err) {
                  res.status(400).send(err.message);
                } else {
                  res.status(200).json(info);
                }})
            )
        })
        await Promise.all(arrayPromises)
    }catch(e){
        next(e);
    }
}

module.exports = { offerAvailable }