const {Order,CartProduct} = require('../../../db')


async function getOrder(req,res) {

    let resp= await Order.findAll({include:[{
        model: CartProduct,
        attributes:["ProductId","quantity"]
    }]})
    res.json(resp)
}

module.exports={getOrder}