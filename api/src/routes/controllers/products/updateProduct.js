const {Product, Category} = require ('../../../db');

const putProduct = async (req, res, ) => {
    const { name, brand, image, price, category} = req.body; 
    const { id } = req.params;

console.log(body)

    try {
        const updating = await Product.update({
            name: name,
            brand: brand,
            image: image,
            price: price,
            category: category,
        }, {
            where: {
                id: id
            }
        });
        let newCat = await Category.findOne({
            where:{
                name: category,
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