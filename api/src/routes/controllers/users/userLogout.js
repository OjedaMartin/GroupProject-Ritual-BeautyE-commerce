const { User } = require('../../../db');
const jwt = require('jsonwebtoken');


const userLogout = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        // console.log(token);
        const decoding = jwt.decode(token)
        console.log(decoding, 'decoding')
        const user = await User.findOne({
            where: {
                email: decoding.user.email
            }
        });
        const logoutToken = await jwt.sign({ user: user }, 'secretkey', {
            expiresIn: '1ms'
        })
        res.status(200).json({ user: user, token: logoutToken })
    } catch(error) {
        res.status(404).json({ msg: "Error en el controller userLogout: " + error });
    }
}



module.exports = { userLogout }