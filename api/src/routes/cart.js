const { Router } = require('express');
const { addProductCart, carts } = require('./controllers/cart/addProductsCart');
const { deleteProd } = require('./controllers/cart/deleteCart');

const router = Router();


router.post('/add/:productId/:email/:cant', addProductCart);
router.get('/all', carts);
router.delete('/delete/:productId', deleteProd);


module.exports = router;