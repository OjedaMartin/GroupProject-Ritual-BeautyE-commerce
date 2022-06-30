const { Product, Cart ,Cart_Product} = require('../../../db')


const addProductCart = async(req, res )=>{
    
    var {productId,cant,email} = req.params
    let prodInfo = await Product.findOne({where:{id:productId}})
    
    if(email){
   
    const prod = await Cart_Product.findOne({ where: {ProductId : productId } })
        if(prod){ 
            let carro = await Cart.findOne({where:{id:prod.CartId}})
            let sum= parseInt(cant) + carro.quantity
            if(sum <= prodInfo.in_Stock){
            await Cart.update({quantity:sum},{where:{id:prod.CartId}})
            res.send("Producto añadido al carrito")
            }else{res.send("Cantidad de stock insuficiente!!")}
         }else {
            
            let newprodcart = await Cart.create({quantity:cant})
            newprodcart.addProduct(prodInfo)
            res.send("Producto añadido al carrito")
         }
 } 
}
async function carts(req,res) {
    let resp = await Cart.findAll()
    res.json(resp)
}  

module.exports = { addProductCart,carts } 