const { Product } = require('../../../db');



// controlador para el filtrado por marca
const filterBrand = async (req, res) => {
	const { brand } = req.params;
	//const { page } = req.query;
	try {
		const byBrand = await Product.findAll({
			where: {
				brand: brand
			},
			// offset: (page - 1) * 10,
			// limit: 10
		})
		res.status(200).send(byBrand); 
	} catch(error) {
		res.status(404).json({ msg: `error en el controller filterBrand: ${error}` })
	}
}



const filterCategories = async(req, res) => {
	const { category } = req.params;
	//const { page } = req.query;
	try {
		const byCategory = await Product.findAll({
			where: {
				CategoryId: category
			},
			//offset: (page - 1) * 10,
			//limit: 10
		});
		res.status(200).send(byCategory);
	} catch(error) {
		res.status(404).json({ msg: `error en el controller filterCategories: ${error}` })
	}
}




module.exports = {
	filterBrand,
	filterCategories
}