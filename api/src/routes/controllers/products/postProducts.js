
const { Product, Category } = require("../../../db");

const createProduct = async (req, res) => {
  const { name, brand, image, price, category } = req.body;
  try {
      console.log("post", name, brand, image, price, category);
      if(name && brand && image && price && category) {
          const newProduct = await Product.create({
              name,
              brand:brand[0],
              image,
              price,
             
          });
          let productCategory = await Category.findOne({
              where: {
                  name: category,
                  
              }
          });
          const product = await newProduct.setCategory(productCategory);
          res.status(200).json({ msg: `Creado!` })
      } else {
          res.status(404).json({ msg: "Faltan datos" })
      }
  } catch(error) {
      res.status(404).send(`Error en el controlador createProduct: ${error}`);
      console.log(error)
      console.info(error)

  }

}
module.exports = {
  createProduct,
};
