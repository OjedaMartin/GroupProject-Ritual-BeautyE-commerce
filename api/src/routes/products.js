const { Router } = require('express');
const { Allproducts } = require('./controllers/products/getAllProducts');
const { getProductById } = require('./controllers/products/productDetail');
const { findProductByName } = require('./controllers/products/searchByName');


 const router = Router();
 router.get('/name', findProductByName)
 router.get('/:id', getProductById)
 router.get('/', Allproducts);
// <<<<<<< HEAD
// // <<<<<<< HEAD
// //  router.get('/create', createProduct)
// // =======
// //  router.get('/:id', getProductById)
// // //  router.get('/create', postProduct)
// // >>>>>>> a2350f3b95e14a16983d92058fd548bbf7cb30ed
// =======
//  router.get('/:id', getProductById)
// //  router.get('/create', postProduct)
// >>>>>>> a2350f3b95e14a16983d92058fd548bbf7cb30ed


 module.exports = router;