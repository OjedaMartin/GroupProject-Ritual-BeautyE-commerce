const { Product, Cart,User} = require('../../../db')


const addProductCart = async(req, res )=>{
    
    var {productsId,email} = req.body
    
    let emailValido= await User.findOne({where:{email}})
   if (emailValido) {
    const prod = await Product.findAll({ where: {id : productsId } }) 
            let cart = await Cart.create()
          await  cart.addProduct(prod)
          await  emailValido.addCart(cart)
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