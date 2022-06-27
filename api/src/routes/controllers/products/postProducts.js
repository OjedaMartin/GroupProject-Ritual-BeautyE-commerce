
const { Product, Category } = require("../../../db");

const createProduct = async (req, res) => {
  const { name, brand, image, price, rating, idcategory, category } = req.body;
  try {
      console.log("post", name, brand, image, price, rating, idcategory, category);
      if(name && brand && image && price && rating && idcategory && category) {
          const newProduct = await Product.create({
              name,
              brand:brand[0],
              image,
              price,
              rating,
              idcategory:idcategory[0]
          });
          let productCategory = await Category.findOne({
              where: {
                  name: category[0]
              }
          });
          // console.log(JSON.stringify(newProduct) + " asdasd")
          const product = await newProduct.addCategory(productCategory);
          console.log("pr", product)    
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
