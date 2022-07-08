const {Cart,CartProduct,User} = require('../../../db')


async function getByUser(req,res) {
    let {email} = req.body
    let user = await User.findOne({where:{email}})
    if(!user) res.send("Usuario no encontrado")
    let cart= await Cart.findOne({where:{UserId:user.id,state:"true"}})
    if(!cart) res.send("El usuario no posee un carrito cargado con productos")
    let resp = await CartProduct.findAll({attributes:["ProductId","quantity"],where:{CartId:cart.id}}) 
    if(!resp) res.send("Controlar CARTPRODUCT")
    res.json(resp)
    /* res.json(resp) */
}

module.exports={getByUser}