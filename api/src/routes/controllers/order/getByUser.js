const {Order,CartProduct,User} = require('../../../db')


async function getByUser(req,res) {
    let {email} = req.body
    let user = await User.findOne({where:{email}}) 

    if(!user) res.send("No se encuentra ese usuario")  
    
    let resp= await Order.findAll({where:{UserId:user.id},include:[{
        model: CartProduct,
        attributes:["ProductId","quantity"]
    }]})
    
    if(resp){ res.json(resp)}
    else{res.send("No posee ordenes el usuario")}
    
}

module.exports={getByUser}