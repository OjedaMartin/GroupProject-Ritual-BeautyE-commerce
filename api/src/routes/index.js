const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const filters = require('./filters')
// const products = require('./products')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/filters', filters);
// router.use('/products', products);


module.exports = router;
