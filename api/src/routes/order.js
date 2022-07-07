const { Router } = require('express');
const { getOrder } = require('./controllers/order/getOrder');
const { createOrder } = require('./controllers/order/createOrder');
const { getByUser } = require('./controllers/order/getByUser');
const { getByState } = require('./controllers/order/getByState');
const { updateState } = require('./controllers/order/updateState');


const router = Router();

router.get('/', getOrder);
router.get('/user', getByUser);
router.post('/create', createOrder);
router.get('/state', getByState);
router.put('/update', updateState);


module.exports = router;