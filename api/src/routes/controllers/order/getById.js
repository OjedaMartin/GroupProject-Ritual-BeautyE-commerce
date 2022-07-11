
const { User } = require('../../../db');


const getById = async(req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const order = await Orders.findOne({
            where: {
                id: id
            }
        });
        res.status(200).json(order)
    } catch(error) {
        res.status(400).json({ error: "Ha ocurrido un error en el controller getById de las orders " + error })
    }
}



module.exports = {getById}