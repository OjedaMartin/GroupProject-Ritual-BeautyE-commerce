const {Product, Category} = require('../../../db');
const { Op } = require('sequelize');


const findProductByName = async (req, res) => {
        const { name } = req.query;
    try{
        const allNames = await Product.findAll({    // el modelo puede ser Productos 
            include: [{
                model: Category,  //puede ser categorias
                attributes: ["name", "id"],     //aca van los atributos del modelo , puede ser nombre de las categorias
                through: {
                    attributes: [],
                }
            }],
            where: {
                name: { [Op.iLike]: `%${name}%` } /*name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()*/    // me aseguro que realize la busqueda sin importar mayusculas   
            }
        });
        const findName = await allNames.map(e => {
            return {
                name: e.name,
                brand: e.brand,
                image: e.image,
                price: e.price,
                rating: e.rating,
                idcategory: e.idcategory,
                in_Stock: e.in_Stock
              // aca van las propiedades del modelo
            }
        })
        findName.length? res.send(findName) : res.status(400).send("Product not found")
    }catch(error){
        console.log(error)
    }
}

module.exports = {
	findProductByName
}