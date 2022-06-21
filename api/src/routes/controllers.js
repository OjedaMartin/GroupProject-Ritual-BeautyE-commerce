const { Product, Category } = require('../db');
const axios = require('axios');

// Guardar categorías de la api a la base de datos
const apiInfo = async () => {
	try {
		// declaro un arreglo vacío para colocar las categorías más adelante
		const arr = [];
		// hago la llamada a la api
		let apiData = await axios.get(`https://sephora.p.rapidapi.com/categories/v2/list-root?rapidapi-key=241ea6f0eamshcffdf203f1e312dp13ab38jsn96f01366ee05`)
		// hago un map y guardo todo en una variable
		let categories = apiData.data.rootCategories.map(async(e) => {
			await Category.findOrCreate({
				where: {
					id: e.categoryId,
					name: e.displayName
				}
			})
		})
		console.log("Base de datos cargada correctamente")
	} catch(error) {
		console.log(error)
	}
}


// listar categorías
const listCategories = async(req, res) => {
	try {
		const datos = await Category.findAll()
		res.status(200).send(datos)
	} catch(error) {
		console.log(error);
	}
}


	// 	let categories = {
	// 		id: e.categoryId,
	// 		name: e.displayName
	// 	}
	// 	arr.push(categories)
	// })
	// console.log(arr);
	// for(let i = 0; i < arr.length; i++) {
	// 	if(arr[i].id==='cat140006' || arr[i].id==='cat150006' || arr[i].id==='cat130038'|| arr[i].id==='cat130042') {
	// 		Category.bulkCreate({

	// 		})
	// 	}
	// }




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
	apiInfo,
	listCategories,
	getName,
	getBrand,
	getPrice,
	getRating
}