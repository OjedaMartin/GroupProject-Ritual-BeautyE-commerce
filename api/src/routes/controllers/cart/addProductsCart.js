const { Product, Cart, User, Order, CartProduct } = require('../../../db')

const addProductCart = async (req, res) => {

    var { productsId, email } = req.body

    console.log('productsId---->', productsId)
    console.log('email---->', email)

    let emailValido = await User.findOne({ where: { email } })
    if (emailValido) {
        let cart = await Cart.findOne({ where: { UserId: emailValido.id, state: "true" } })
       
       
            
            for (let i = 0; i < productsId.length; i++) {
                let prod = await CartProduct.findOne({ where: { CartId: cart.id, ProductId: productsId[i].id } })
                if (prod) {
                    await CartProduct.update({ quantity: productsId[i].quantity }, { where: { id: prod.id } })
                } else {
                    await CartProduct.create({ CartId: cart.id, ProductId: productsId[i].id, quantity: productsId[i].quantity })
                }

            }
        

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