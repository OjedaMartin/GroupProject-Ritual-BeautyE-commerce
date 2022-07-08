const {Order} = require('../../../db')

const getByState = async (req, res, next)=>{
    let { state } = req.query;
    try{
        let ordersFiltered = await Order.findAll({
            where:{
                state: state,
            }
        })
        ordersFiltered ?
        res.status(200).json(ordersFiltered) :
        res.status(400).send("No orders with that state were found.")
    }catch(e){
        next(e);
    }
}

module.exports = {getByState}