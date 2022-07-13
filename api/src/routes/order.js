const { Router } = require('express');
const { getOrder } = require('./controllers/order/getOrder');
const { createOrder } = require('./controllers/order/createOrder');
const { getByUser } = require('./controllers/order/getByUser');
const { updateState } = require('./controllers/order/updateState');
const {getById}= require('./controllers/order/getById')

const router = Router();

router.get('/', getOrder);
router.get('/user', getByUser);
router.put('/state/:id/:state', updateState);
router.post('/create', createOrder);
router.get('/id/:id',getById)

module.exports = router;