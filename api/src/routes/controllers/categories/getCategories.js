const {Category} = require('../../../db')

async function Allcategories(req, res) {
    try {
        let resp = await Category.findAll({
            where: { status: 'Active' }
        })
        res.json(resp)
    } catch (error) {
        res.send(error)
    }    
}  



module.exports= {Allcategories}