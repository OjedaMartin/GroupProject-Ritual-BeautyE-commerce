const { User, Product, Review } = require('../../../db');



const addReview = async (req, res) => {
    let { email, rating, text, name} = req.body;  
    try {
        
        let productCheck = await Product.findOne({where :{name}})
        let user = await User.findOne({
            where :{ 
                email: email,
            },
        })
        let reviewCheck = await Review.findOne({
            where:{
                email: email,
                ProductId: productCheck.id,
            }
        })
        if(reviewCheck) return res.status(400).send(`User ${user.name} has already made a review on this product.`)
        if (!productCheck) return res.status(404).json({message:'no existe producto'})
        if (!user) return res.status(404).json({message:'no existe usuario'})
        
        // if(user.Reviews.include)

        let newReview = await Review.create({
                rating,
                text,
                email : user.email
        })
        await productCheck.addReview(newReview)

        //Actualizo el rating
        let productRating = await Product.findOne({
            where:{
                name: name,
            },
            include:{
                model: Review,
                attributes: ["rating"],
            }
        })
        let newRating = productRating.Reviews.map(review => {
            return review.rating
        }).reduce((previousValue, currentValue) => previousValue + currentValue)/(productRating.Reviews.length)

        await Product.update({
            rating: newRating
        },{
            where:{
                name: name,
            }
        })
        res.status(200).json(newReview)
    }catch(error) {
        console.log(error)

    }
}




module.exports = { addReview };