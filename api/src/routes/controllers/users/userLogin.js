const jwt = require('jsonwebtoken');
const { User } = require('../../../db');
const bcrypt = require('bcrypt');


const userLogin = (req, res) => {
    let { email, password } = req.body;
        User.findOne({
            where: {
                email: email,
            }
        }).then(user => {
            if(!user) {
                res.status(404).json({ msg: "Usuario no encontrado" })
            } else {
                if(bcrypt.compare(password, user.password)) {
                    // Devolvemos token
                    let token =jwt.sign({ user: user }, 'secretkey', {
                        expiresIn: "24h"
                    })
                    res.json({
                        user: user,
                        token: token
                    })
                } else {
                    // Acceso no autorizado
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }
            }
        })
            
        
}



module.exports = { userLogin }