const {Router} = require('express')
const { Allcategories } = require('./controllers/categories/getCategories')
const {postCategories} = require('./controllers/categories/postCategories')
const {putCategories} = require('./controllers/categories/PutCategories')

const router = Router();

router.post('/create',postCategories)
router.put('/cambio/',putCategories)
router.get('/', Allcategories);




module.exports = router;