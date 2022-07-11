const {Order} = require('../../../db')

async function updateState(req,res) {
 
    let {state,id} = req.params

    await Order.update({state},{where:{id}}) 

    res.send('Estado de orden actualizado a: '+ state)
}

module.exports={updateState}
