const {Order,CartProduct,User,Product} = require('../../../db')


async function getByUser(req,res) {
    let {email} = req.params
    console.log(email)
    let user = await User.findOne({where:{email}})   
    let resp= await Order.findAll({where:{UserId:user.id}/* ,include:[{
        model: CartProduct,
        attributes:["ProductId","quantity"]
    }] */})
    
    let result = []
    for (let i = 0; i < resp.length; i++) {
        let a ={
           id: resp[i].id,
           state:resp[i].state,
           address: resp[i].address,
           createdAt: resp[i].createdAt,
           user: email,
           CartId: resp[i].CartId,
           products: await data(resp[i].CartId) 
        }
        result.push(a)
       
    }
   async function data(a) {  
     let info =  (await CartProduct.findAll({attributes:["ProductId","quantity"],where:{CartId:a}}))
       /*   */
        let b = []
        let c= {}
        for (let j = 0; j < info.length; j++) {
            /* console.log("detalle info!!!",info[i]) */
            c={
               product :(await Product.findOne({where: {id:info[j].ProductId}})),
               quantity : info[j].quantity
             }
          b.push(c)
      }
       console.log("detalle final!!!",b)
      return b

    }

    res.json(result)
}

module.exports={getByUser}