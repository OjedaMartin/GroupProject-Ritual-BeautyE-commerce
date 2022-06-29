const {Cart, Product} = require('../../../db')


async function deleteProd(req,res) {
    let {productId,email} = req.params
      
    let infoProd = await Product.findOne({where:{id:productId}})
    if(email){
        let existe = Cart.findOne({where:{prod:infoProd.name}})
        if(existe){
        await Cart.destroy({where:{prod:infoProd.name}})
        res.send("producto eliminado")
        }else{
            res.send("producto no esta en carrito")
        }
    }else{
        res.send("Debe loguearse para continuar")
    }
    
}  


module.exports={deleteProd}