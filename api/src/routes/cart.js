const { Router } = require('express');
const { addProductCart, carts } = require('./controllers/cart/addProductsCart');


const router = Router();


router.post('/add', addProductCart);
router.get('/all', carts);



module.exports = router;