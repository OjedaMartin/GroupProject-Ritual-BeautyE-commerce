const { User, Product } = require('../../../db')

const addReview = async (req, res) => {
    const {email, productName} = req.body;
    try{
        const product = await Product.findOne({where :{name : productName}})

        if(!product) {
            res.status(404).json('Product didnt found')
        } else {
            const review = await product.createReview({
                text: req.body.text,
                rating: req.body.rating,

            });
            const user = User.findOne({where:{email}});

            if(!user) {
                res.status(404).json('User didnt found')
            } else {
                const addUser = await user.addReview(review)
                res.status(201).json('Review created' + review)
            }
        }

    }catch (error){
        console.log(error)

    }
}


module.exports = { addReview };