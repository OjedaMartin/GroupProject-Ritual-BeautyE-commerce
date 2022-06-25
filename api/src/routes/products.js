const { Router } = require('express');
const { Allproducts } = require('./controllers/products/getAllProducts');
const { getProductById } =require('./controllers/products/productDetail');
const { createProduct } = require('./controllers/products/postProducts');
const { findProductByName } = require('./controllers/products/searchByName');

const router = Router();

router.get('/search', findProductByName);
router.get('/', Allproducts);
router.get('/:id', getProductById);
router.post('/create', createProduct);



module.exports = router;