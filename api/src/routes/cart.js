const { Router } = require('express');
const { addProductCart } = require('./controllers/cart/addProductsCart');
const router = Router();


router.post('/', addProductCart);


module.exports = router;