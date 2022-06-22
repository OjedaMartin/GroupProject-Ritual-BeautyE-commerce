const { Router } = require('express');

 const { Allproducts } = require('./controllers/products/getAllProducts')

 const router = Router();
 router.get('/', Allproducts);


 module.exports = router;