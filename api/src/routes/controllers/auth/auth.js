// Aquí se configura el middleware para hacer la authorization
const jwt = require('jsonwebtoken');
const { User } = require('../../../db');
// const { Role } = require('../../../db');

const isAuth = async(req, res, next) => {
    const { email } = req.body;
    // Comprobar que el token existe
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Usuario no autorizado" })
    } else {
        // Comprobar la validez del token
        let token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, 'secretkey', (err, decoded) => {
            if(err) {
                // res.redirect('http://localhost:3000/login')
                res.status(401).json({ msg: "Ahora es momento de redireccionar a la ruta de logueo" })
            } else {
                User.findOne({where: {email: email}}).then(user => {
                    if(user.dataValues.membership !== "Admin") {
                        res.status(401).json({ msg: "Acceso denegado" })
                    } else {
                        console.log("Pase don!")
                        next()
                    }
                })
            }
        })
    }
}

module.exports = { isAuth }