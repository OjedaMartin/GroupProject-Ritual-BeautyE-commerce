const bcrypt = require('bcrypt');
const { User, FooterUser } = require('../../../db');
const jwt = require('jsonwebtoken');


// Regitro
const userRegister = async(req, res) => {
    let {name, email, password} = req.body;
    try {
        //Borramos el usuario en footer (si existe)
        let footer = await FooterUser.findOne({
            where:{
                email: email,
            }
        });
        footer ?
        await FooterUser.destroy({
            where: {
                id: footer.id,
            },
        }) : null
        // Checkeamos si el usuario ya existe
        let userCheck = await User.findOne({
            where:{
                name: name,
                email: email,
            }
        });
        let nameCheck = await User.findOne({
            where:{
                name: name,
            }
        })
        let emailCheck = await User.findOne({
            where:{
                email: email,
            }
        })
        userCheck ?
        res.send(`User ${name} is already in database`) :
        nameCheck ?
        res.send(`${name} is already in use`) :
        emailCheck ?
        res.send(`${email} is already in use`) :
        // Creamos el usuario
        await User.create({
            name: name,
            email: email,
            password: password
        }).then(user => {
            // Creamos el token
            let token = jwt.sign({ user }, 'secretkey', {
                expiresIn: "24h"
            })
            res.status(200).json({ user, token })
        });
    } catch(err) {
        res.status(404).send(`Error en el controller userRegister: ${err}`);
    }
}



module.exports = { userRegister }