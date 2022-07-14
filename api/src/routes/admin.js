const { Router } = require('express');
const { banUser } = require("./controllers/admin/banUser")
const { discountProduct } = require("./controllers/admin/discountProduct")
const { upgradeToAdmin } = require("./controllers/admin/upgradeToAdmin")


const router = Router();

router.put("/ban", banUser)
router.put("/upgrade", upgradeToAdmin)
router.put("/discount", discountProduct)

module.exports = router;
