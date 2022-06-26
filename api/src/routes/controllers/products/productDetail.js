const {Product, Category} = require('../../../db')



const getProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const productFound = await Product.findAll( { 
        where : {
        id : id 
        },
        include: Category
      });
            // Incluir modelo en la busqueda ( en caso de necesitarlo )
      productFound.length? res.send(productFound) : res.status(400).send("Product not found")
    } catch (error) {
      console.log(error);
    }
  };



  module.exports = {
	getProductById
}