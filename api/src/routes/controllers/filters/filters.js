const { Product } = require('../../../db');


// FILTRADOS POR NOMBRE, MARCA, PRECIO Y RATING

// controlador para el filtrado por nombre
const getName = async (req, res) => {
	const { name } = req.params;
	const { page } = req.query;
	try {
		const byName = await Product.findAndCountAll({
			where: {
				name: name
			},
			offset: (page - 1) * 10,
			limit: 10
		})
		res.status(200).send(byName);
	} catch(error) {
		res.status(404).json({ msg: `error en el controller getName: ${error}` })
	}
}



// controlador para el filtrado por marca
const getBrand = async (req, res) => {
	const { brand } = req.params;
	const { page } = req.query;
	try {
		const byBrand = await Product.findAndCountAll({
			where: {
				brand: brand
			},
			offset: (page - 1) * 10,
			limit: 10
		})
		res.status(200).send(byBrand); 
	} catch(error) {
		res.status(404).json({ msg: `error en el controller getBrand: ${error}` })
	}
}



// controlador para el filtrado por precio
const getPrice = async (req, res) => {
	const { price, page } = req.params;
	try {
		const byPrice = await Product.findAndCountAll({
			where: {
				price: price
			},
			offset: (page - 1) * 10,
			limit: 10
		})
		res.status(200).send(byPrice);
	} catch(error) {
		res.status(404).json({ msg: `error en el controlador getPrice: ${error}` })
	}
}



// controlador para filtrar productos por rating
const getRating = async (req, res) => {
	const { rating, page } = req.params;
	try {
		const byRating = await Product.findAndCountAll({
			where: {
				rating: rating
			},
			offset: (page - 1) * 10,
			limit: 10
		})
		res.status(200).send(byRating)
	} catch(error) {
		res.status(404).json({ msg: `error en el controlador getRating: ${error}` })
	}
}

module.exports = {
	getName,
	getBrand,
	getPrice,
	getRating
}