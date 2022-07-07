const bcrypt = require('bcrypt');
const { User, FooterUser } = require('../../../db');
const jwt = require('jsonwebtoken');


// Regitro
const userRegister = async(req, res) => {
    try {
        let password = bcrypt.hashSync(req.body.password, 10)
        // Creamos el usuario
        let footer = await FooterUser.findOne({
            where:{
                email: req.body.email,
            }
        })
        footer ?
        await FooterUser.destroy({
            where: {
              id: footer.id,
            },
          }) : null
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
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