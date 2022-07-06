const {Cart,CartProduct,User} = require('../../../db')


async function getByUser(req,res) {
    let {email} = req.body
    let user = await User.findOne({where:{email}})
    let cart= await Cart.findOne({where:{UserId:user.id,state:"true"}})
    
    let resp = await CartProduct.findAll({attributes:["ProductId","quantity"],where:{CartId:cart.id}}) 

    res.json(resp)
    /* res.json(resp) */
}

module.exports={getByUser}