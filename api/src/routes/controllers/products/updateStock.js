const {Product} = require("../../../db")


async function updateStock(req,res) {
    let {stock} = req.body
    let {id} = req.params

    
    await Product.update({in_Stock:stock},{where:{id}})
    res.send("Stock modificado!!")
}

module.exports={updateStock}