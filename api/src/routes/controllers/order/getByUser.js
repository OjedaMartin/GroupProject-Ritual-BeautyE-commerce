const {Order,CartProduct,User} = require('../../../db')


async function getByUser(req,res) {
    let email = req.params.email
    console.log(email)
    let user = await User.findOne({where:{email:email}})  
    console.log("use", user)

    let resp= await Order.findAll({where:{UserId:user.id},include:[{ 
        model: CartProduct,
        attributes:["ProductId","quantity"]
    }]})
    console.log("res", resp)
    
    res.json(resp)
}

module.exports={getByUser}