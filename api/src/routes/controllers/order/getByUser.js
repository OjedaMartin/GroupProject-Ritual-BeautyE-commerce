const {Order,CartProduct,User} = require('../../../db')


async function getByUser(req,res) {
<<<<<<< HEAD
    let email = req.params.email
    console.log(email)
    let user = await User.findOne({where:{email:email}})  
    console.log("use", user)

    let resp= await Order.findAll({where:{UserId:user.id},include:[{ 
=======
    let {email} = req.body
    let user = await User.findOne({where:{email}}) 

    if(!user) res.send("No se encuentra ese usuario")  
    
    let resp= await Order.findAll({where:{UserId:user.id},include:[{
>>>>>>> 62661b90a531d23e0a83c7b3edcd2869d6e85e93
        model: CartProduct,
        attributes:["ProductId","quantity"]
    }]})
    console.log("res", resp)
    
    if(resp){ res.json(resp)}
    else{res.send("No posee ordenes el usuario")}
    
}

module.exports={getByUser}