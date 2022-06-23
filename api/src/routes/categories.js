const {Router} = require('express')
const { Allcategories } = require('./controllers/categories/getCategories')

const router = Router();

router.get('/', Allcategories);



module.exports = router;