const { Router, query } = require('express');
const axios = require('axios')
const {Product, Category} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', async(req,res)=>{
    let a = await Category.findAll()
    
    res.json(a)
})
router.get ('/id' ,async (req, res) => {
    try {
      const { id } = req.params;
      const productFound = await Category.findOne( { where : {id : id }});      // Incluir modelo en la busqueda ( en caso de necesitarlo )
      productFound.length? res.send(productFound) : res.status(400).send("Product not found")
    } catch (error) {
      console.log(error);
    }
  });



module.exports = router;