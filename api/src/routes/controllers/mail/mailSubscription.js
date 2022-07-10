const nodemailer = require("nodemailer");
const {User} = require("../../../db")
const {transporter} = require("./transporter")

async function subscriptionChange(req, res, next){
    let { userID } = req.body;
    try{
        let user = await User.findOne({
            where:{
                id: userID,
            }
        })

        await transporter.sendMail({
            from: '"Membership changed!"<ritual.makeup.commerce@gmail.com>',
            to: user.email,
            subject: `Membership renewed for Ritual Make-up Store`,
            html:`<h4>Thank you for renewing your membership to Ritual Make-up Shop!</h4>
            <p>User ${user.name} now has the ${user.membership} membership.
            Explore new deals and our extensive catalogue of products at <a href="https://pg-ecommerce-client.vercel.app/">Ritual</a>!</p>    `
          }, (err, info) => {
            if (err) {
              res.status(400).send(err.message);
            } else {
              res.status(200).json(info);
            }});
    }catch(e){
        next(e);
    }
}

module.exports = { subscriptionChange }