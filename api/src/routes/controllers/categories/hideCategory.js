const { Category } = require('../../../db')


const hideCategory = async (req, res) => {
    try {
        let {name} = req.body;
        //console.log(req.body)
        
        const categoryByName = await Category.findAll({where:{name:name}})
        if(categoryByName.length){
            const result = await Category.update({status: 'Hidden'},
                {where:{
                    name:name,
                }}
            )
            res.status(200).send('Category updated')
            
        } else{
            res.status(400).send('Updating error')
        }
    } catch (error) {
        console.log(error)

    }
}



module.exports ={ 
    hideCategory
}