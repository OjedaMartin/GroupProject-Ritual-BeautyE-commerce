const { User, Review } = require('../../../db');

const getReviews = async (req, res) => {

    try{

        const review = await Review.findAll({
            include:[{
                model: User,
                attributes : ['name', 'email']
            }]
        });
        if(review) {
            res.status(200).json('Reviews found' + review);
        } else {
            res.status(404).json('User didnt make any comment')
        }

    }catch(error){
        console.log(error)

    }
}

module.exports = { getReviews }