const {Router} = require('express')
const { Allcategories } = require('./controllers/categories/getCategories')
const { postCategory } = require('./controllers/categories/postCategory')
const { deleteCategory } = require('./controllers/categories/deleteCategory')

const router = Router();

router.get('/', Allcategories);

router.post("/", postCategory);

router.delete("/", deleteCategory);

module.exports = router;