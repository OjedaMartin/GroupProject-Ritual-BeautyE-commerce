const {Router} = require('express')
const { Allcategories } = require('./controllers/categories/getCategories')
const {postCategory} = require('./controllers/categories/postCategories')
const { putCategories } = require('./controllers/categories/putCategories')
const { deleteCategory } = require('./controllers/categories/deleteCategory')

const router = Router();

router.post('/create',postCategory)
router.get('/', Allcategories);
router.put('/change', putCategories)
router.put('/delete', deleteCategory)



module.exports = router;