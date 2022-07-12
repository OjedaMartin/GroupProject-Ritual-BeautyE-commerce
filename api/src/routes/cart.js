const { Router } = require('express');
const { addProductCart, carts } = require('./controllers/cart/addProductsCart');
const { getByUser } = require('./controllers/cart/getByUser');



const router = Router();


router.put('/add', addProductCart);
router.get('/all', carts);
router.get('/user/:email', getByUser);



module.exports = router;