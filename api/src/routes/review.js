const { Router } = require('express');
const { addReview } = require('./controllers/review/addReview')
const { deleteReview } = require('./controllers/review/deleteReview')
const { getReviews } = require('./controllers/review/getReviews')



const router = Router();

router.get('/', getReviews)
router.post('/create', addReview)
router.delete('delete', deleteReview)




module.exports = router;