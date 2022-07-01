const jwt = require('jsonwebtoken');

// Aquí irá la lógica de la membresía del usuario común
// Este middleware se utilizará para cuando se haga click en la 
// orden de compra. Es decir, si no es un usuario común (registrado)
// que se redirija hacia el formulario de registro en el front
const isCommon = (req, res, next) => {
    try {
        const authorization = req.get('authorization');
        const token = authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'secretkey');

        if(decodedToken.userForToken.membership !== "Common") {
            return res.redirect('http://localhost:3000/login');
        } else {
            next()
        }
    } catch(error) {
        console.log(error);
    }
}


module.exports = { isCommon }