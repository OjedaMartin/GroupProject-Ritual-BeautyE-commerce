const nodemailer = require("nodemailer");
const {User} = require("../../../db")
const {transporter} = require("./transporter")

async function userCreated(req, res, next){
    let { userID } = req.body;
    try{
        let user = await User.findOne({
            where:{
                id: userID,
            }
        })

        await transporter.sendMail({
            from: '"User created!"<ritual.makeup.commerce@gmail.com>',
            to: user.email,
            subject: `Thank you for signing up to Ritual Make-up Shop`,
            html:`<h4>Welcome!</h4>
            <p>User ${user.name} has been created successfully.
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

module.exports = { userCreated }