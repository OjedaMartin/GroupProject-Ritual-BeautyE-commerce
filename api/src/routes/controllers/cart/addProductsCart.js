const { Product, Cart } = require('../../../db')


const addProductCart = async(req, res )=>{
   
    var {productId,cant,email} = req.params
    if(email){
   
    const prod = await Product.findOne({ where: { id: productId } })

    if (prod.in_Stock > cant){


         const existe = await Cart.findOne({where:{prod:prod.name}}) 
        if(existe){
            let total = existe.quantity + cant
            /* await Cart.update({quantity:total},{where:{id:existe.id}}) */
            console.log(prod.price)
           
            res.send("Producto agregado con un valor de: "+ total * prod.price)
        }else{
            await Cart.create({prod:prod.name, quantity:cant})
            res.send("Producto agregado")
        } 
    }else {
        res.send("No hay stock suficiente")
    }
    }else {
        res.send("Debe loguearse para continuar")
    }

}
async function carts(req,res) {
    let resp = await Cart.findAll()
    res.json(resp)
}  

module.exports = { addProductCart,carts } 