const { Router } = require('express');
const { orderConfirmation } = require("./controllers/mail/mailOrderConfirmation")

const router = Router();

router.post("/order", orderConfirmation);

module.exports = router;