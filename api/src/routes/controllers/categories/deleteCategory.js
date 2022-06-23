const axios = require('axios')
const {Category} = require('../../../db')

const deleteCategory = async (req, res) => {
    let { id } = req.query;
    try{
        let categoryCheck = await Category.findAll({
            where:{
                id: id
            }
        })
        if(categoryCheck.length === 0){
            return res.status(400).send("Category Not Found")
        } else{
            await Category.destroy({
                where:{
                    id: id
                }
            })
            res.status(200).send("Category deleted")
        }
    }catch(e){
        next(e);
    }
}

module.exports= {deleteCategory}