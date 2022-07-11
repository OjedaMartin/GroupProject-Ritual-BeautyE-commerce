const {Order,CartProduct,Product,User} = require('../../../db')


async function getOrder(req,res) {

    let resp= await Order.findAll()

    let result = []
    for (let i = 0; i < resp.length; i++) {
        let a ={
           id: resp[i].id,
           state:resp[i].state,
           address: resp[i].address,
           createdAt: resp[i].createdAt,
           user: await User.findOne({attributes:["email"],where:{id:resp[i].UserId}}),
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

module.exports={getOrder}