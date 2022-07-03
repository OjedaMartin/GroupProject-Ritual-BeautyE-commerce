const { Product_Review, Review } = require('../../../db')



const deleteReview = async (req, res) => {
    try{
        const reviewId = req.params.id;

        await Review.destroy({where :{id: reviewId}})
        await Product_Review.destroy({where:{ReviewId : reviewId}})
        res.send('Review Eliminado');

    }catch(error){
        console.log(error)
    }
}


module.exports = { deleteReview };