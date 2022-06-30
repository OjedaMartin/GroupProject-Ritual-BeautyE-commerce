// Aquí se configura el middleware para hacer la authorization
const jwt = require('jsonwebtoken');
// const { Role } = require('../../../db');



module.exports = (req, res, next) => {
    // Comprobar que el token existe
    if(!req.headers.authorization) {
        res.redirect('http://localhost:3000/')
    } else {
        // Comprobar la validez del token
        let token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, 'secretkey', (err, decoded) => {
            if(err) {
                res.status(500).json({ msg: "Ha ocurrido un error a decodificar el token " + err })
            } else {
                // User.findByPK(decoded.user.id, { include: "roles"}).then(user => {
                //     req.user = user;
                    next()
                // })
            }
        })
    }
}