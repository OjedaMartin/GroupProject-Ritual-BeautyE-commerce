const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require('./products')
const categories= require('./categories')
const filters = require('./filters')
const users = require('./users')
const cart = require('./cart');
const review = require('./review')
const mail = require("./mail")
const order = require('./order')
const wishlist = require('./wishlist')

// const products = require('./products')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/products', products);
router.use('/categories', categories);
router.use('/filters', filters);
router.use('/users', users);
router.use('/cart', cart);
router.use('/review', review);
router.use("/mail", mail);
router.use('/order', order)
router.use('/wishlist', wishlist)

// router.use('/products', products);


module.exports = router;

