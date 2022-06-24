const {Product} = require('../../../db')
// const axios = require('axios')
// const apikey = '31d60d4a89msh7a2c8a42c71e138p1e7691jsn6ff1ded85376'
    
// async function cargaP(id){
// let j = []
// var producto =await axios.get(`https://sephora.p.rapidapi.com/products/list?rapidapi-key=${apikey}&categoryId=${id}&pageSize=20&currentPage=1`)
//     producto.data.products.map(e => {
//     let b = {
//         id: e.productId,
//         name: e.displayName,
//         brand: e.brandName,
//         image: e.image135,
//         price: e.currentSku.listPrice  ,
//         rating: e.rating,
//         idcat: id
//     }
//     j.push(b)
// })
// =======
// const apikey = '31d60d4a89msh7a2c8a42c71e138p1e7691jsn6ff1ded85376'
// const apikey = '31d60d4a89msh7a2c8a42c71e138p1e7691jsn6ff1ded85376'

// async function cargaP(id){
// let j = []
// var producto =await axios.get(`https://sephora.p.rapidapi.com/products/list?rapidapi-key=${apikey}&categoryId=${id}&pageSize=20&currentPage=1`)
//     producto.data.products.map(e => {
//     let b = {
//         id: e.productId,
//         name: e.displayName,
//         brand: e.brandName,
//         image: e.image135,
//         price: e.currentSku.listPrice  ,
//         rating: e.rating,
//         idcat: id
//     }
//     j.push(b)
// })

// async function cargaP(id){
// let j = []
// var producto =await axios.get(`https://sephora.p.rapidapi.com/products/list?rapidapi-key=${apikey}&categoryId=${id}&pageSize=20&currentPage=1`)
//     producto.data.products.map(e => {
//     let b = {
//         id: e.productId,
//         name: e.displayName,
//         brand: e.brandName,
//         image: e.image135,
//         price: e.currentSku.listPrice  ,
//         rating: e.rating,
//         idcat: id
//     }
//     j.push(b)
// })
// >>>>>>> a2350f3b95e14a16983d92058fd548bbf7cb30ed

//     for (let i = 0; i < j.length; i++) {
//         Product.findOrCreate({
//             where: {/* id: j[i].id, */
//             name: j[i].name,
//             brand: j[i].brand,
//             image: j[i].image,
//             price: j[i].price,
//             rating: j[i].rating,
//             idcategory: j[i].idcat  
//             }
//         })
//     }
// }

// let cod= ['cat140006','cat150006','cat130038','cat130042']
//     for (let i = 0; i < cod.length; i++) {
//         const unicos = [... new Set(i)]
//         cargaP(unicos) 
//     }


// Modificación añadida: paginado
async function Allproducts(req, res) {
    const { page } = req.query;
    try {
        let resp = await Product.findAndCountAll({
            offset: (page - 1) * 10,
            limit: 10
        })  
        res.status(200).json(resp)
    } catch (error) {
        res.status(404).send(error);
    }    
}  
        


module.exports= { Allproducts }