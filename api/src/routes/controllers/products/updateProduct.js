const {Product, Category} = require ('../../../db');

const putProduct = async (req, res, ) => {
    const { name, brand, image, price, rating, idcategory } = req.body;
    const { id } = req.params;
    try {
        const updating = await Product.update({
            name: name,
            brand: brand,
            image: image,
            price: price,
            rating: rating,
        }, {
            where: {
                id: id
            }
        });
        let newCat = await Category.findOne({
            where:{
                id: idcategory,
            }
        })
        let updatedProd = await Product.findOne({
            where:{
                id: id,
            }
        })
        // console.log("Find All:  " + JSON.stringify(updatedProd))
        await updatedProd.setCategory(newCat)
        res.status(200).send(updatedProd)
    } catch(error) {
        res.status(404).send(`Error en el controller putProduct: ${error}`)
    }
}



module.exports = {
    putProduct
}