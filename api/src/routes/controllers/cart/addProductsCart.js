const { Product, User } = require('../../../db')


const addProductCart = async(req, res )=>{
    const { productId, userEmail } = req.body
    
   
    await Product.findOne({
        where: {
            id: productId
        }
    }).then( async product => {
        await User.findOne({
            where: {
                email: userEmail
            }
        }).then( async user => {
            await user.addProduct(product)
                await user.getProducts({ attributes: ["id", "name", "brand", "price"] }).then(list => {
                    res.send({msg: list})
                }) 
        } )
    }).catch(error => {
        res.send({ msg: `Error en el controler addProductCart: ${error}` })
        
    })
   

}


module.exports = { addProductCart } 