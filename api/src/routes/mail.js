const { Router } = require('express');
const { orderConfirmation } = require("./controllers/mail/mailOrderConfirmation");
const { subscriptionChange } = require('./controllers/mail/mailSubscription');
const { userCreated } = require("./controllers/mail/mailUserCreated");

const router = Router();

router.put("/order", orderConfirmation);
router.put("/user", userCreated)
router.put("/subscription", subscriptionChange)

module.exports = router;