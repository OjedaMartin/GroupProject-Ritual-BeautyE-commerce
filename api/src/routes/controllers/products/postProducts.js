
const { Product, Category } = require("../../../db");

const createProduct = async (req, res) => {
  const { name, brand, image, price, rating, idcategory, category } = req.body;
  try {
      console.log(name, brand, image, price, rating, idcategory, category);
      if(name && brand && image && price && rating && idcategory, category) {
          const newProduct = await Product.create({
              name,
              brand,
              image,
              price,
              rating,
              idcategory
          });
          let productCategory = await Category.findOne({
              where: {
                  name: category
              }
          });
          // console.log(JSON.stringify(newProduct) + " asdasd")
          const product = await newProduct.addCategory(productCategory);
          res.status(200).json({ msg: `Creado!` })
      } else {
          res.status(404).json({ msg: "Faltan datos" })
      }
  } catch(error) {
      res.status(404).send(`Error en el controlador createProduct: ${error}`);

  }
}

module.exports = {
  createProduct,
};
