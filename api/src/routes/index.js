const { Router } = require('express');
const router = Router();
const filters = require('./filters');
const categories = require('./categories');

// middleware para loggear as consultas
const morgan = require('morgan');

// middlewares para los archivos de las rutas
router.use('/filters', filters);
router.use('/categories', categories);


module.exports = router;