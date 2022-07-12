const {Cart,CartProduct,User,Product} = require('../../../db')


async function getByUser(req,res) {
    let {email} = req.params
    console.log('BUSCA CART DEL USER')
    let user = await User.findOne({where:{email}})
    let cart= await Cart.findOne({where:{UserId:user.id,state:"true"}})    
    if(!cart){ res.status(200).json([])}
    else{
    let resp = await CartProduct.findAll({attributes:["ProductId","quantity"],where:{CartId:cart.id}}) 
    for (let i = 0; i < resp.length; i++) {
        
        resp[i].ProductId = await Product.findOne({where: {id:resp[i].ProductId}})
    }    
     
    res.json(resp)
}
}

module.exports={getByUser} 