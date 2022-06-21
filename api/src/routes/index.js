const {Router} = require('express');
const axios = require('axios')
const {Category, Product} = require('../db')
// Importar todos los routers;
const productRouter = require('./Product')
const categoryRouter = require('./Category');

// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los router
// Ejemplo: router.use('/auth', authRouter);
//router.use('/countries',CountriesRouter);
router.use('/product',productRouter);
router.use('/category',categoryRouter)
//carga countries en db
var x = [], j= []

const cargaC = async()=> {
  

  let categoria= await axios.get('https://sephora.p.rapidapi.com/categories/v2/list-root?rapidapi-key=241ea6f0eamshcffdf203f1e312dp13ab38jsn96f01366ee05')
  
   categoria.data.rootCategories.map(e => {
    
    let a = {
      id: e.categoryId,
      name: e.displayName
    }
    x.push(a)

  }); 
  console.log(x)
      for (let i = 0; i < x.length; i++) {
         if(x[i].id==='cat140006' || x[i].id==='cat150006' || x[i].id==='cat130038'|| x[i].id==='cat130042'){
              Category.findOrCreate({
                where: {id: x[i].id,
                        name: x[i].name,
                      }
                })
                 
    }}
}
async function cargaP(id){

  var producto =await axios.get(`https://sephora.p.rapidapi.com/products/list?rapidapi-key=241ea6f0eamshcffdf203f1e312dp13ab38jsn96f01366ee05&categoryId=${id}&pageSize=20&currentPage=1`)
                
              console.log(producto.data.products)  
                producto.data.products.map(e => {
    
                let b = {
                  id: e.productId,
                  name: e.displayName,
                  brand: e.brandName,
                  image: e.image135,
                  price: e.listPrice,
                  reting: e.rating,
                  idcat: id
                }
                j.push(b)
  
                })

    
        for (let i = 0; i < j.length; i++) {
           
           Product.findOrCreate({
      
           where: {id: j[i].id,
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
      
    for (let i = 0; i < x.length; i++) {
      if(x[i].id==='cat140006' || x[i].id==='cat150006' || x[i].id==='cat130038'|| x[i].id==='cat130042'){
        let a =x[i].id 
        cargaP(a)
        console.log(a)
      }
    }
    
      
       

 
      
  /*    let llego =async()=> {var res =await Category.findAll()
    return res
    }
        
if(!llego)carga() */

  cargaC()
  

console.log('bd CARGADA')
  


module.exports = router;
