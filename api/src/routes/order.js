const { Router } = require('express');
const { getOrder } = require('./controllers/order/getOrder');

const router = Router();

router.get('/', getOrder);


module.exports = router;