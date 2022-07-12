const { Router } = require('express');
const { orderConfirmation } = require("./controllers/mail/mailOrderConfirmation");
const { subscriptionChange } = require('./controllers/mail/mailSubscription');
const { userCreated } = require("./controllers/mail/mailUserCreated");
const { footerSubscription } = require("./controllers/mail/mailFooterSubscription");
const { offerAvailable } = require('./controllers/mail/mailOffer');
const { discountOffer } = require('./controllers/mail/mailDiscountOffer');

const router = Router();

router.put("/order", orderConfirmation);
router.put("/user", userCreated)
router.put("/subscription", subscriptionChange)
router.put("/footer", footerSubscription)
router.put("/offer", offerAvailable)
router.put("/discount", discountOffer)


module.exports = router;