// Aquí irá la lógica de la membresía del usuario
const jwt = require('jsonwebtoken');


const isAdmin = (req, res, next) => {
    try {
        const authorization = req.get('authorization');
        const token = authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'secretkey');

        if(decodedToken.userForToken.membership !== "Admin") {
            return res.status(401).json({ error: "Admin permissions required" });
        } else {
            next()
        }
    } catch(error) {
        console.log(error);
    }
}


module.exports = { isAdmin }