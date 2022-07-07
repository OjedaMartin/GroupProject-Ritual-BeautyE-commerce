const { Product, Cart,User,Order,CartProduct} = require('../../../db')


const addProductCart = async(req, res )=>{
    
    var {productsId,email} = req.body
    
     console.log('productsId---->',productsId)
     console.log('email---->',email)
    
    let emailValido= await User.findOne({where:{email}})
   if (emailValido) {
    let cartrue = await Cart.findOne({where:{UserId:emailValido.id,state:"true"}})
        if(cartrue){
        await Cart.destroy({where:{id:cartrue.id}})
        await CartProduct.destroy({where:{CartId:cartrue.id}})
    }
        let cart = await Cart.create()
       await emailValido.addCart(cart)
       for (let i = 0; i < productsId.length; i++) {
              
             await CartProduct.create({CartId:cart.id, ProductId:productsId[i].id,quantity:productsId[i].cant})
       }
       
        
            
           
            res.send("carrito creado con sus productos")
   }else {
    res.send("usuario debe loguearse")
   }
    
         }
 

async function carts(req,res) {
    let resp = await Cart.findAll()
    res.json(resp)
}  

module.exports = { addProductCart,carts } 