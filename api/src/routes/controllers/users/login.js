const { bcryptjs } = require('bcryptjs');
const { User } = require('../../../db');



const loginUser = async(req, res) => {
    let {
        email,
        password 
    } = req.body
    try {
        password = await bcryptjs.hash(password, 8)
        let resp = User.findOne({
            where: {
                email: email
            }
        });
        if(resp){
            let resp1 = await User.findOne({
                where: {
                    password: password
                }
            });
            if(resp1) return res.send('Sesion Iniciada') 
            else { return res.send('Contraseña Incorrecta') }
        } else { return res.send('Usuario no existente') }
    } catch (error) {
        res.status(404).send(error, 'Verificar codigo login')
    }
}



module.exports = { loginUser }