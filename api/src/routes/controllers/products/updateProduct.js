const {Product} = require ('../../../db');

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
            idcategory: idcategory,
        }, {
            where: {
                id: id
            }
        });
        res.status(200).send(updating)
    } catch(error) {
        res.status(404).send(`Error en el controller putProduct: ${error}`)
    }
}



module.exports = {
    putProduct
}