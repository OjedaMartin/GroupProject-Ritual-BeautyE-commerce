const { Router } = require('express');

 const { Allproducts } = require('./controllers/products/getAllProducts')
 const { getProductById } =require('./controllers/products/productDetail')
 const { createProduct } = require('./controllers/products/postProducts')





 const router = Router();
 router.get('/', Allproducts);
 router.get('/:id', getProductById)
 router.get('/create', createProduct)


 module.exports = router;