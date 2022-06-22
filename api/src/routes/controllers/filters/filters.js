const { Product } = require('../../../db');


// FILTRADOS POR NOMBRE, MARCA, PRECIO, IMAGEN Y RATING

// controlador para el filtrado por nombre
const getName = async (req, res) => {
	const { name } = req.params;
	try {
		const byName = await Product.findAll({
			where: {
				name: name
			}
		})
		res.status(200).send(byName);
	} catch(error) {
		res.status(404).json({ msg: `error en el controller getName: ${error}` })
	}
}



// controlador para el filtrado por marca
const getBrand = async (req, res) => {
	const { brand } = req.params;
	try {
		const byBrand = await Product.findAll({
			where: {
				brand: brand
			}
		})
		res.status(200).send(byBrand); 
	} catch(error) {
		res.status(404).json({ msg: `error en el controller getBrand: ${error}` })
	}
}



// controlador para el filtrado por precio
const getPrice = async (req, res) => {
	const { price } = req.params;
	try {
		const byPrice = await Product.findAll({
			where: {
				price: price
			}
		})
		res.status(200).send(byPrice);
	} catch(error) {
		res.status(404).json({ msg: `error en el controlador getPrice: ${error}` })
	}
}



// controlador para filtrar productos por rating
const getRating = async (req, res) => {
	const { rating } = req.params;
	try {
		const byRating = await Product.findAll({
			where: {
				rating: rating
			}
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