const nodemailer = require("nodemailer");
const {FooterUser, User} = require("../../../db")
const {transporter} = require("./transporter")

async function footerSubscription (req, res, next){
    let { email } = req.body;
    try{
        let userCheck = await User.findOne({
          where: {
            email: email,
          }
        });
        userCheck ?
        res.status(400).send("User is already subscribed to our notification plan") :
        
        await FooterUser.create({
            email: email,
        })

        await transporter.sendMail({
            from: '"Ritual Make-up Commerce team"<ritual.makeup.commerce@gmail.com>',
            to: email,
            subject: `Successful registration to Ritual Make-up's notification program!`,
            html:`<h4>Welcome!</h4>
            <p>You've successfully activated notifications for Ritual Make-up commerce!.
            Explore new deals and our extensive catalogue of products at <a href="http://localhost:3000/">Ritual</a>!</p>    `
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

module.exports = { footerSubscription };