const { Router } = require('express');
const { Allproducts } = require('./controllers/products/getAllProducts');
const { getProductById } = require('./controllers/products/productDetail');
const { createProduct } = require('./controllers/products/postProducts');
const { findProductByName } = require('./controllers/products/searchByName');
const { putProduct } = require('./controllers/products/updateProduct');
const { isAuth } = require('./controllers/middlewares/auth');
const {updateStock} = require('./controllers/products/updateStock');
const { isAdmin } = require('./controllers/middlewares/authAdmin');


const router = Router();

router.get('/search', findProductByName);
router.get('/', Allproducts);
router.get('/:id', getProductById);
router.post('/create', createProduct);
router.put('/update/:id', putProduct);
router.put('/stock/:id',updateStock);



module.exports = router;