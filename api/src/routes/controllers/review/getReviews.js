const { User, Review } = require('../../../db');

const getReviews = async (req, res) =>{
    try{
        
        const review = await Review.findAll()
     
        if(review) {
            res.status(200).json(review);
        } else {
            res.status(404).json('No reviews available')
        }

    }catch(error){
        console.log(error)

    }
}





module.exports = { getReviews }