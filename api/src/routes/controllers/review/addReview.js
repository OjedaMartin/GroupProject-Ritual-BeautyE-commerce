// const { User, Product, Review } = require('../../../db');



// const addReview = async (req, res) => {
        
//     try {
//         let { id } = req.params;
//         let { email, rating, text} = req.body;
//         console.log('req.body :>> ', req.body);
        
//         let prod = await Product.findByPk(id)
//         let use = await User.findOne({where :{ email}})

//         if (!prod) {
//             res.status(404).json({
//                 message:'no existe producto'
//             })
//         }
//         if (!use) {
//             res.status(404).json({
//                 message:'no existe usuario'
//             })
//         }

//         let newReview = await Review.create({
//                 rating,
//                 text
//         })
//         prod.addReview(newReview)

//         res.status(200).send('Creado')
//     }catch(error) {
//         console.log(error)

//     }
// }




// module.exports = { addReview };





// 


const { User, Product, Review } = require('../../../db');



const addReview = async (req, res) => {
        
    try {
        let { email, rating, text, name} = req.body;
        console.log('req.body :>> ', req.body);
        
        let prod = await Product.findOne({where :{name}})
        let use = await User.findOne({where :{ email}})

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
                text
        })
        prod.addReview(newReview)

        res.status(200).send('Creado  :)')
    }catch(error) {
        console.log(error)

    }
}




module.exports = { addReview };