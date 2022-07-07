const {Category} =require('../../../db')

const deleteCategory = async (req, res, next)=>{
    let {catID} = req.body;
    try{
        let catToDelete = await Category.findOne({
            where:{
                id: catID,
            }
        })
        if(catToDelete){
            await Category.update({
                state: "Hidden",
            },{
                where:{
                    id: catID,
                }
            })
            res.status(200).send(`Category ${catToDelete.name} has been disabled`)
        } else{
            res.status(400).send("No category with that ID has been found")
        }
    }catch(e){
        next(e);
    }
}

module.exports = {deleteCategory}