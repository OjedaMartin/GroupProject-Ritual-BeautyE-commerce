const { Router } = require('express');
const {Product, Category} = require('../db')
const {Op} = require('sequelize')




const router = Router();

router.get('/',async(req,res)=>{
    let a = await Product.findAll()
    
    res.json(a)
})


module.exports = router;