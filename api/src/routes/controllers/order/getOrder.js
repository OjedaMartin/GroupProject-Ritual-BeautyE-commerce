const {Order} = require('../../../db')

async function getOrder(req,res) {

    let resp= await Order.findAll()

    res.json(resp)
}

module.exports={getOrder}