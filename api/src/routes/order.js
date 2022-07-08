const { Router } = require('express');
const { getOrder } = require('./controllers/order/getOrder');
const { createOrder } = require('./controllers/order/createOrder');
const { getByUser } = require('./controllers/order/getByUser');


const router = Router();

router.get('/', getOrder);
router.get('/user/:email', getByUser);
router.post('/create', createOrder);


module.exports = router;