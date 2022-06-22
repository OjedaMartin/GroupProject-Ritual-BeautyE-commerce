const axios = require('axios')
const {Product} = require('../../../db')
const apikey = 'bf846e5427msh03fbb9d49efc324p167fb9jsn81eaa933cbe3'
    
async function cargaP(id){
let j = []
        var producto =await axios.get(`https://sephora.p.rapidapi.com/products/list?rapidapi-key=${apikey}&categoryId=${id}&pageSize=20&currentPage=1`)
                      
                     
                      producto.data.products.map(e => {
          
                      let b = {
                        id: e.productId,
                        name: e.displayName,
                        brand: e.brandName,
                        image: e.image135,
                        price: e.currentSku.listPrice  ,
                        rating: e.rating,
                        idcat: id
                      }
                      j.push(b)
        
                      })
      
          
              for (let i = 0; i < j.length; i++) {
                 
                 Product.findOrCreate({
            
                 where: {/* id: j[i].id, */
                 name: j[i].name,
                 brand: j[i].brand,
                 image: j[i].image,
                 price: j[i].price,
                 rating: j[i].rating,
                 idcategory: j[i].idcat  
                 }
                })
              }
       }
            let cod= ['cat140006','cat150006','cat130038','cat130042']
          for (let i = 0; i < cod.length; i++) {
              let a =cod[i]
              cargaP(a) 
          }

    async   function Allproducts(req,res) {
        try {
            let resp = await Product.findAll()
            res.json(resp)
        } catch (error) {
            res.send(error)
        }    
        }  
          module.exports= {Allproducts}