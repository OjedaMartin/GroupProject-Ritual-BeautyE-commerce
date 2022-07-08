const { Cart, CartProduct, User } = require('../../../db')


async function getByUser(req, res) {
    try {
        let { email } = req.params;
        console.log('EMAIL-->', email)
        let user = await User.findOne({ where: { email: email } })//ver si falta email : email
        // if (!user) res.send("Usuario no encontrado")
        let cart = await Cart.findOne({ where: { UserId: user.id, state: "true" } })
        // if (!cart) res.send("El usuario no posee un carrito cargado con productos")
        let resp = await CartProduct.findAll({ attributes: ["ProductId", "quantity"], where: { CartId: cart.id } })
        //if (!resp) res.send("Controlar CARTPRODUCT")
        res.json(resp)
    } catch (e) {
        res.status(404).send(e)
    }

    /* res.json(resp) */
}





module.exports = { getByUser }