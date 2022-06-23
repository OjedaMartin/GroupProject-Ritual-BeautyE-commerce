const { Router } = require('express');

 const { Allproducts } = require('./controllers/products/getAllProducts')
 const { getProductById } = require('./controllers/products/productDetail')

 const router = Router();
 router.get('/:id', getProductById)
 router.get('/', Allproducts);


 module.exports = router;