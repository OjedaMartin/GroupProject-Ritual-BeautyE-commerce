const {Order,CartProduct,User,Product} = require('../../../db')


async function getById(req,res) {
    let {id} = req.params

    let resp= await Order.findOne({where:{id}/* ,include:[{
        model: CartProduct,
        attributes:["ProductId","quantity"]
    }] */})
    if(!resp){res.send("No existe esta orden")}
    else{
    let result = []

        let a ={
           id: resp.id,
           state:resp.state,
           address: resp.address,
           createdAt: resp.createdAt,
           user: await User.findOne({attributes:["email"],where:{id:resp.UserId}}),
           CartId: resp.CartId,
           products: await data(resp.CartId) 
        }
        result.push(a)


   async function data(a) {
     let info =  (await CartProduct.findAll({attributes:["ProductId","quantity"],where:{CartId:a}}))

        let b = []
        let c= {}
        for (let j = 0; j < info.length; j++) {

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
}}

module.exports={getById}