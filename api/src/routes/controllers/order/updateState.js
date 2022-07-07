const {Order} = require('../../../db')

const updateState = async (req, res, next)=>{
    let { state, OrderID } = req.query;
    try{
        let updatedOrder = await Order.update({
            state: state,
        },{
            where:{
                id: OrderID,
            }
        })
        updatedOrder ?
        res.status(200).send(`Order n°${updatedOrder.id} has been updated`) :
        res.status(400).send("No order with that ID has been found") 
    }catch(e){
        next(e);
    }
}

module.exports = {updateState}