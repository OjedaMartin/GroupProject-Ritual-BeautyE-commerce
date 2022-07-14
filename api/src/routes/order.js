const { Router } = require('express');
const { getOrder } = require('./controllers/order/getOrder');
const { createOrder } = require('./controllers/order/createOrder');
const { getByUser } = require('./controllers/order/getByUser');
const { getById } = require('./controllers/order/getById');
const { updateState } = require('./controllers/order/updateState');


const router = Router();

router.get('/', getOrder);
router.get('/getById/:id', getById);
router.get('/user/:email', getByUser);
router.put('/state/:id/:state', updateState);
router.post('/create', createOrder);
router.get('/id/:id',getById)

module.exports = router;