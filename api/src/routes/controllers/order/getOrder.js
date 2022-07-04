const {Order,CartProduct} = require('../../../db')


async function getOrder(req,res) {

    let resp= await Order.findAll({include:[{
        model: CartProduct,
        attributes:["cartId","productId","quantity"]
    }]})
    console.log(resp)
    res.json(resp)
}

module.exports={getOrder}