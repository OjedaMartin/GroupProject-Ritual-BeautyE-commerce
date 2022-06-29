const {Router} = require('express')
const { Allcategories } = require('./controllers/categories/getCategories')
const {postCategory} = require('./controllers/categories/postCategories')

const router = Router();

router.post('/create',postCategory)
router.get('/', Allcategories);



module.exports = router;