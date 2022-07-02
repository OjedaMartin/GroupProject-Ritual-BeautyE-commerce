const {Router} = require('express')
const { Allcategories } = require('./controllers/categories/getCategories')
const {postCategory} = require('./controllers/categories/postCategories')
const { putCategories } = require('./controllers/categories/putCategories')

const router = Router();

router.post('/create',postCategory)
router.get('/', Allcategories);
router.get('/change', putCategories)



module.exports = router;