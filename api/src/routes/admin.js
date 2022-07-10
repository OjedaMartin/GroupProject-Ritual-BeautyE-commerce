const { Router } = require('express');
const { banUser } = require("./controllers/admin/banUser")
const { upgradeToAdmin } = require("./controllers/admin/upgradeToAdmin")

const router = Router();

router.put("/ban", banUser)
router.put("/upgrade", upgradeToAdmin)

module.exports = router;