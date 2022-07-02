const { Cart_Product} = require('../../../db')


async function deleteProd(req,res){
    let {CartId,ProductId} = req.params
    
    await Cart_Product.destroy({where:{CartId,ProductId}})
    res.send("Producto eliminado del carrito!!")
  
}  

module.exports={deleteProd}