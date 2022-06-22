const {Product, Category} = require('../../../db')




const createProduct = async (req, res) => {

    const { name, brand, image , price, rating, in_Stock, category} = req.body;

    const newProduct = await Product.create ({ type, name, brand, image, price, rating, in_Stock })

    let productCategory = await Category.findAll({
        where: { name : category}
    })

    newProduct?.addCategory(productCategory);
    res.send("Product created")

  }


  module.exports = {
	createProduct
}