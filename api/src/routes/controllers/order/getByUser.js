const {Order,CartProduct,User} = require('../../../db')


async function getByUser(req,res) {
    let {email} = req.body
    let user = await User.findOne({where:{email}})   
    let resp= await Order.findAll({where:{UserId:user.id},include:[{
        model: CartProduct,
        attributes:["ProductId","quantity"]
    }]})
    
    res.json(resp)
}

module.exports={getByUser}