
const { Product, Category } = require("../../../db");

const createProduct = async (req, res) => {
  const { name, brand, image, price, rating, idcategory } = req.body;
  try {
      console.log(name, brand, image, price, rating, idcategory);
      if(name && brand && image && price && rating && idcategory) {
          const newProduct = await Product.create({
              name,
              brand,
              image,
              price,
              rating
          });
          let productCategory = await Category.findAll({
              where: {
                  name: idcategory
              }
          });
          console.log(JSON.stringify(newProduct) + " asdasd")
          await newProduct.addCategory(productCategory);
          res.status(200).json('Product created successfully!')
      } else {
          res.status(404).json({ msg: "Faltan datos" })
      }
  } catch(error) {
      res.status(404).send("Error en el controlador createProduct" + error);

  }
}

module.exports = {
  createProduct,
};
