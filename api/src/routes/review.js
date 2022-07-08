const { Router } = require('express');
const { addReview } = require('./controllers/review/addReview')
const { deleteReview } = require('./controllers/review/deleteReview')
const { getReviews } = require('./controllers/review/getReviews')
const { putReviews } = require('./controllers/review/putReview')



const router = Router();

router.get('/', getReviews)
//router.post('/create/:id', addReview)
router.post('/create/', addReview)
router.delete('/delete/:id', deleteReview)
router.put('/cambio/:id', putReviews)





module.exports = router;