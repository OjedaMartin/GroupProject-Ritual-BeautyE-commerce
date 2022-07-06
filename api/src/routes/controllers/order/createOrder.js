const { Cart,User,Order,CartProduct} = require('../../../db')


const createOrder = async(req, res )=>{
    
    var {email} = req.body
    var user = await User.findOne({where:{email}}) 
    
    if (user){
        let orden= await Order.create({address:user.address})
        user.addOrder(orden)
        
        let cart = await Cart.findOne({where:{UserId:user.id,state:"true"}})
        
        if (cart) {
            await Cart.update({state:"false"},{where:{UserId:user.id}})
           await cart.addOrder(orden)
            let prods= await CartProduct.findAll({CartId:cart.id})
           await orden.addCartProduct(prods)
        }
    }

    /* 
    let prodcart = await CartProduct.findAll({where:{CartId:cart.id}})

    let stock =await Product.findOne({where:{id:productsId[i].id}})
    stock = stock.in_Stock - productsId[i].cant
   await Product.update({in_Stock:stock},{where:{id:productsId[i].id}}) */
res.send("Orden creada!!")

}

module.exports= {createOrder}