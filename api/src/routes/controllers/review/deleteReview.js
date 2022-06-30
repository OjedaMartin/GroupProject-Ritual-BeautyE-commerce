const { User, Review } = require('../../../db')


const deleteReview = async (req, res) =>{
    const { email, productName } = req.body
    try{
        const user = await User.findOne({where:{email}});

        if(!user) {
            res.status(404).json('User didnt found')
        } else {
            const products = await user.getReviews();

            if(!products){
                res.status(404).json('Product has no comments')
            } else {
                const nProduct = nProduct.map(prod => prod.productName)
                if(nProduct.includes(productName)) {
                    const review = await Review.destroy({where: {productName: productName, userName: userName}})
                    res.status(200).json('Review Deleted')
                } else {
                    res.status(404).json('Review didnt found')
                }
            }
        }
    }catch(error){
        console.log(error)
    }
}


module.exports = { deleteReview };