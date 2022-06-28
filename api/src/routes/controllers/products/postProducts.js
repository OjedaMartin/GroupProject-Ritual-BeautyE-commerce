
const { Product, Category } = require("../../../db");

const createProduct = async (req, res) => {
  const { name, brand, image, price, rating, idcategory } = req.body;
  try {
      console.log("post", name, brand, image, price, rating, idcategory);
      if(name && brand && image && price && rating && idcategory) {
          const newProduct = await Product.create({
              name,
              brand,
              image,
              price,
              rating,
          });
          let productCategory = await Category.findOne({
              where: {
                  id: idcategory,
              }
          });
          // console.log(JSON.stringify(newProduct) + " asdasd")
          const product = await newProduct.setCategory(productCategory);
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
