const { Category } = require('../../../db')


const putCategories = async (req, res) => {
    try {
        let {name, id} = req.body;
        console.log(req.body)
        
        const categoryById = await Category.findAll()
        if(categoryById.length){
            const result = await Category.update({name},
                {where:{
                    id:id,
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
    putCategories
}