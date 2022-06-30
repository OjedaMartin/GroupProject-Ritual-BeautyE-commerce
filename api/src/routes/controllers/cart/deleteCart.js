const { Cart_Product,Cart} = require('../../../db')


async function deleteProd(req,res) {
    let {productId} = req.params
    let idcarro =await Cart_Product.findOne({where: {ProductId:productId}})
    await Cart_Product.destroy({where: {ProductId:productId}})
    await Cart.destroy({where:{id:idcarro.CartId}})
    res.send("Producto eliminado del carrito!!")
  
}  


module.exports={deleteProd}