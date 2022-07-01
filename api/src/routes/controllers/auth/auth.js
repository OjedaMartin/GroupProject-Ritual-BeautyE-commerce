// Aquí se configura el middleware para hacer la authorization
const jwt = require('jsonwebtoken');
const { User } = require('../../../db');
// const { Role } = require('../../../db');


// Middleware para autorización
const isAuth = async (req, res, next) => {
    try {
        const authorization = req.get('authorization');
        const token = authorization.split(' ')[1];
    
        const decodedToken = jwt.verify(token, 'secretkey');
        console.log(decodedToken.userForToken)

        if(!token || !decodedToken.userForToken.id) {
            return res.status(401).json({ msg: "token missing or invalid" })
        }
        next()
    } catch(error) {
        console.log(error)
    }
}



module.exports = { isAuth }