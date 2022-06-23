const axios = require('axios')
const {Category, Product} = require('../../../db')

const postCategory = async (req, res)=>{
    let { name /*, products*/ } = req.body;
    try{
        if(!name){
            return res.status(400).send("Necessary data missing")
        } else{
            let createdCat = await Category.create({
                name: name,
            });
        // if(products){
        //     let productModels = Product.findAll({
        //         where:{
        //             name: products
        //         }
        //     });
        //     productModels.addCategory(createdCat);
        // }
        res.status(200).send(`Category ${name} has been created!`)
        }
    }catch(e){
        next(e);
    }

}
module.exports = {postCategory};