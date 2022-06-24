// const axios = require('axios')
const { Product } = require('../../../db')

async function Allproducts(req, res) {
    const { page } = req.query;
    try {
        if(page) {
            let resp = await Product.findAll({
                offset: (page - 1) * 10,
                limit: 10
            })
            res.status(200).json(resp)
        } else if(!page) {
            let resp = await Product.findAll()
            res.status(200).send(resp)
        
    } catch (error) {
        res.status(404).send(error);
    }
}
        


module.exports= { Allproducts }