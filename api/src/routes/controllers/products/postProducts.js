const {Product, Category} = require('../../../db')

const createProduct = async (req, res) => {

    const { name, brand, image , price, rating, category} = req.body;

    const newProduct = await Product.create ({ type, name, brand, image, price, rating })

    let productCategory = await Category.findAll({
        where: { name : category}
    })

    newProduct?.addCategory(productCategory);
    res.send("Product created")

  }





  module.exports = {
	createProduct
}

  