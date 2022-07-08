const { Cart, User, Order, CartProduct, Product } = require("../../../db");

const createOrder = async (req, res) => {
  var { email, address } = req.body;
  var user = await User.findOne({ where: { email } });
  let orden;
  if (user) {
    if (!address) {
      orden = await Order.create({ address: user.address });
    } else {
      orden = await Order.create({ address });
    }
    user.addOrder(orden);

    let cart = await Cart.findOne({
      where: { UserId: user.id, state: "true" },
    });

<<<<<<< HEAD
    if (cart) {
      await Cart.update({ state: "false" }, { where: { UserId: user.id } });
      await cart.addOrder(orden);
      let prods = await CartProduct.findAll({ CartId: cart.id });
      for (let i = 0; i < prods.length; i++) {
        let prod = await Product.findOne({ where: { id: prods[i].ProductId } });
        let stock = prod.in_Stock - prods[i].quantity;
        if (stock > 0) {
          await Product.update(
            { in_Stock: stock },
            { where: { id: prods[i].ProductId } }
          );
          await orden.addCartProduct(prods);
        } else {
          res.send("OffStock");
=======
const createOrder = async(req, res )=>{
    
    var {email,address} = req.body
    var user = await User.findOne({where:{email}}) 
    let orden
    if (user){
        if(!address){
         orden= await Order.create({address:user.address})
        }else{ 
         orden= await Order.create({address})}

         if(!orden) res.send("ingresar ADDRESS para el destino de su compra")
         
        user.addOrder(orden)
       
        let cart = await Cart.findOne({where:{UserId:user.id,state:"true"}})
        
        if (cart) {
            await cart.addOrder(orden)
            
           let stock
            let prods= await CartProduct.findAll({CartId:cart.id})
            for (let i = 0; i < prods.length; i++) {
                let prod =await Product.findOne({where:{id:prods[i].ProductId}}) 
                if(prod.in_Stock < prods[i].quantity) { stock = prod.in_Stock}
                else{ stock = prod.in_Stock - prods[i].quantity}
                
                await Cart.update({state:"false"},{where:{UserId:user.id}})
                await Product.update({in_Stock:stock},{where:{id:prods[i].ProductId}})
            }
            
           await orden.addCartProduct(prods)
>>>>>>> 62661b90a531d23e0a83c7b3edcd2869d6e85e93
        }
      }
    }
  }

  /* 
    let prodcart = await CartProduct.findAll({where:{CartId:cart.id}})

    let stock =await Product.findOne({where:{id:productsId[i].id}})
    stock = stock.in_Stock - productsId[i].cant
   await Product.update({in_Stock:stock},{where:{id:productsId[i].id}}) */
  res.send("Orden creada!!");
};

module.exports = { createOrder };
