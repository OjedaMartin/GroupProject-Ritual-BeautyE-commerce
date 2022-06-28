
const { Product, Category } = require("../../../db");

const createProduct = async (req, res) => {
<<<<<<< HEAD
  const { name, brand, image, price, rating, category, id } = req.body;
  try {
      console.log("post", name, brand, image, price, rating, category, id);
      if(name && brand && image && price && rating && category && id) {
=======
  const { name, brand, image, price, rating, idcategory } = req.body;
  try {
      console.log("post", name, brand, image, price, rating, idcategory);
      if(name && brand && image && price && rating && idcategory) {
>>>>>>> 76cd64388d31c99c4f8d9b1d9800ea4e4df2cd02
          const newProduct = await Product.create({
              name,
              brand,
              image,
              price,
<<<<<<< HEAD
              rating
          })
          let productCategory = await Category.findAll({
              where: {
                id: id,
                name: category
=======
              rating,
          });
          let productCategory = await Category.findOne({
              where: {
                  id: idcategory,
>>>>>>> 76cd64388d31c99c4f8d9b1d9800ea4e4df2cd02
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
