const { Router } = require('express');
const { Allproducts } = require('./controllers/products/getAllProducts');
const { getProductById } = require('./controllers/products/productDetail');
const { findProductByName } = require('./controllers/products/searchByName');


 const router = Router();
 router.get('/name', findProductByName)
 router.get('/:id', getProductById)
 router.get('/', Allproducts);
//  router.get('/create', createProduct)


 module.exports = router;