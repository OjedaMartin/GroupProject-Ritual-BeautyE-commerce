
const { Product, Category } = require("../../../db");

const createProduct = async (req, res) => {
  const { name, brand, image, price, CategoryId } = req.body;
  try {
      console.log("post", name, brand, image, price, CategoryId);
      if(name && brand && image && price && CategoryId) {
          const newProduct = await Product.create({
              name,
              brand:brand[0],
              image,
              price,
             
          });
          let productCategory = await Category.findOne({
              where: {
                  id: CategoryId,
              }
          });
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
