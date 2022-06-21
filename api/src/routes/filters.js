const { Router } = require('express');
const router = Router();
const { 
	getName,
	getBrand,
	getPrice,
	getRating
} = require('./controllers.js');


// ruta para el filtrado por nombre
router.get('/:name', getName);

// ruta para el filtrado por marca
router.get('/:brand', getBrand);

// ruta para el filtrado por precio
router.get('/:price', getPrice);


// ruta para el filtrado por rating
router.get('/:rating', getRating);



module.exports = router;