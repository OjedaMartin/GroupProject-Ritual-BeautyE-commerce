const { Review, Product} = require('../../../db');

const putReviews = async (req, res) => {
    try{
        let  reviewId  = req.params.id;
        let { rating , text} = req.body;

        
        let rev = await Review.findByPk(reviewId)
        
        if (!rev) {
            res.status(404).send(
                'no existe review'
            )
        }
        //creo un nuevo review
        nuevo = await rev.update({ rating, text });
        res.send(nuevo);

    }catch (error) {
        console.log(error)

    }
}

module.exports = { putReviews }