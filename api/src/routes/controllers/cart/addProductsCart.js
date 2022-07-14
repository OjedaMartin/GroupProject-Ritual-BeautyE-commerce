const { Product, Cart, User, Order, CartProduct } = require('../../../db')

const addProductCart = async (req, res) => {

    var { productsId, email } = req.body

    console.log('productsId---->', productsId)
    console.log('email---->', email)
    let cart
    let user = await User.findOne({ where: { email } })
    if (user) {
        cart = await Cart.findOne({ where: { UserId: user.id, state:"true" } })
        if(cart){ await Cart.destroy({where:{id:cart.id}})}

        cart = await Cart.create()
        await user.addCart(cart)
        for (let i = 0; i < productsId.length; i++) {

            await CartProduct.create({ CartId: cart.id, ProductId: productsId[i].id, quantity: productsId[i].quantity })
        }



        
        /* let cart = await Cart.findOne({ where: { UserId: emailValido.id, state: "true" } })
            let productIn = await CartProduct.findAll({where:{CartId: cart.id}})
                for (let i = 0; i < productIn.length; i++) {
                    let a = 

                }

            for (let i = 0; i < productsId.length; i++) {
                let prod = await CartProduct.findOne({ where: { CartId: cart.id, ProductId: productsId[i].id } })
                if (prod) {
                    await CartProduct.update({ quantity: productsId[i].quantity }, { where: { id: prod.id } })
                } else {
                    await CartProduct.create({ CartId: cart.id, ProductId: productsId[i].id, quantity: productsId[i].quantity })
                }

            } */

        


        res.send("carrito creado con sus productos")
    } else {
        res.send("usuario debe loguearse")
    }

}

async function carts(req, res) {
    let resp = await Cart.findAll()
    res.json(resp)
}

module.exports = { addProductCart, carts }