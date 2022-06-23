const { Router } = require('express');
const router = Router();
const { 
	getName,
	getBrand,
	getPrice,
	getRating
} = require('./controllers/filters/filters.js');



// ruta para el filtrado por name
router.get('/name/:name', getName);



// ruta para el filtrado por brand
router.get('/brand/:brand', getBrand);



// ruta para el filtrado por price
router.get('/price/:price', getPrice);



// ruta para el filtrado por rating
router.get('/rating/:rating', getRating);




module.exports = router;