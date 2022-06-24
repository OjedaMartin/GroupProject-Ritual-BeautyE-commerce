const axios = require('axios')
const {Category} = require('../../../db')
const apikey = 'fe7a2646d5msh89e07432c535c61p1691f3jsn047b557c3dfd'

const cargaC = async()=> {
  
    let x= []
    let categoria= await axios.get(`https://sephora.p.rapidapi.com/categories/v2/list-root?rapidapi-key=${apikey}`)
    
     categoria.data.rootCategories.map(e => {
      
      let a = {
        id: e.categoryId,
        name: e.displayName
      }
      x.push(a)
  
    }); 
   
        for (let i = 0; i < x.length; i++) {
           if(x[i].id==='cat140006' || x[i].id==='cat150006' || x[i].id==='cat130038'|| x[i].id==='cat130042'){
                Category.findOrCreate({
                  where: {id: x[i].id,
                          name: x[i].name,
                        }
                  })
                   
      }}
  }

  cargaC()

  async   function Allcategories(req,res) {
    try {
        let resp = await Category.findAll()
        res.json(resp)
    } catch (error) {
        res.send(error)
    }    
    }  
      module.exports= {Allcategories}