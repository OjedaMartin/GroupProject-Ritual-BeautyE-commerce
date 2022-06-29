// Controller para traer todos los usuarios creados de la base de datos
const { User } = require('../../../db');

const getUsers = async(req, res) => {
    try {
        const users = await User.findAll();
        res.send(users)
    } catch(error) {
        res.send(error)
    }
}


module.exports = { getUsers }