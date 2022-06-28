const bcrypt = require('bcrypt');


// Regitro
const userRegister = async(req, res) => {
    try {
        let password = bcrypt.hashSync(req.body.password, 10)
        // Creamos el usuario
        const newUser = await User.create({
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
        res.sendStatus(403);
    }
}



module.exports = { userRegister }