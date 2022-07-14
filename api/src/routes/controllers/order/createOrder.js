const { Cart,User,Order,CartProduct,Product} = require('../../../db')


const createOrder = async(req, res )=>{
    
    var {email,address} = req.body
    var user = await User.findOne({where:{email}}) 
    console.log("user",user) 
    let orden
    if (user){
        if(!address){
         orden= await Order.create({address:user.address})
        }else{ 
         orden= await Order.create({address})
        }
        if(!user.address){
            await User.update({
                address: address,
            },{
                where:{
                    email: email,
                }
            })
        }
        if(!orden) res.send("Address is needed for the shipping of your products")
         
        user.addOrder(orden)
       
        let cart = await Cart.findOne({where:{UserId:user.id,state:"true"}})
        
        if (cart) {
            await cart.addOrder(orden)
            
           let stock
            let prods= await CartProduct.findAll({CartId:cart.id})
            for (let i = 0; i < prods.length; i++) {
                let prod =await Product.findOne({where:{id:prods[i].ProductId}}) 
                if(prod.in_Stock < prods[i].quantity) { stock = prod.in_Stock}
                else{ stock = prod.in_Stock - prods[i].quantity}
                
                await Cart.update({state:"false"},{where:{UserId:user.id}})
                await Product.update({in_Stock:stock},{where:{id:prods[i].ProductId}})
            }
            
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