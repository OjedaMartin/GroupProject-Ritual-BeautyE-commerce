const { Product, Cart,User,Order,CartProduct} = require('../../../db')


const addProductCart = async(req, res )=>{
    
    var {productsId,email} = req.body
    
    let emailValido= await User.findOne({where:{email}})
   if (emailValido) {

        let cart = await Cart.create()
        
       for (let i = 0; i < productsId.length; i++) {
              let stock =await Product.findOne({where:{id:productsId[i].id}})
              stock = stock.in_Stock - productsId[i].cant
             await Product.update({in_Stock:stock},{where:{id:productsId[i].id}})
             await CartProduct.create({cartId:cart.id, productId:productsId[i].id,quantity:productsId[i].cant})
       }
       
            let prodcart = await CartProduct.findAll({where:{cartId:cart.id}})
            
            let address= emailValido.address
            let orden = await Order.create({address})
            emailValido.addOrder(orden)
            orden.addCartProduct(prodcart) 
            res.send("Producto añadido al carrito")
   }else {
    res.send("usuario debe loguearse")
   }
    
         }
 

async function carts(req,res) {
    let resp = await Cart.findAll()
    res.json(resp)
}  

module.exports = { addProductCart,carts } 