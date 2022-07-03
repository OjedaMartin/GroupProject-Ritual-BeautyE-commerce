// const axios = require('axios')
const { Product } = require('../../../db')

async function Allproducts(req, res) {
    const { page } = req.query;
    try {
        let a = []
        if(page) {
            let resp = await Product.findAll({
                offset: (page - 1) * 10,
                limit: 10
            })
            resp.map((e) =>{ if(e.in_Stock!==0)a.push(e)})
            res.status(200).json(a)
        } else if(!page) {
            
            let resp = await Product.findAll()
            resp.map((e) =>{ if(e.in_Stock!==0)a.push(e)})
            res.status(200).send(a)
        }   
    } catch (error) {
        res.status(404).send(error);
    }
}


        


module.exports= { Allproducts }