const {Category} = require('../../../db')


async function postCategory(req,res){

try {
    let name = req.body.category
    console.log(name)
    await Category.create({name})
    res.status(200).send("Nueva categoria creada")
} catch (error) {
    res.status(400).send(error, "controlar ruta post category")
}
} 
module.exports={postCategory}