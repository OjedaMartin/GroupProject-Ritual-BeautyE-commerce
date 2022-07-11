const { User, Product, Review } = require('../../../db');



const addReview = async (req, res) => {
        
    try {
        let { email, rating, text, name} = req.body;
        console.log('req.body :>> ', req.body);
        
        let prod = await Product.findOne({where :{name}})
        let use = await User.findOne({where :{ email}})
        console.log("PROOOOOD", prod)
        console.log("USEEEEE", use)

        if (!prod) {
            res.status(404).json({
                message:'no existe producto'
            })
        }
        if (!use) {
            res.status(404).json({
                message:'no existe usuario'
            })
        }

        let newReview = await Review.create({
                rating,
                text,
                email : use.email
        })
        await prod.addReview(newReview)
        // console.log(asd)

        res.status(200).json(newReview)
    }catch(error) {
        console.log(error)

    }
}




module.exports = { addReview };