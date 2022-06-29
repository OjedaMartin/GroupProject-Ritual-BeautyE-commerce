// Controller para crear el token de inicio de sesión de usuario
const jwt = require('jsonwebtoken');
const { User } = require('../../../db');
const bcrypt = require('bcrypt');

const userLogin = (req, res) => {
    const { email, password } = req.body;
    jwt.sign({ email, password }, 'secretkey', (err, token) => {
        res.json({ token })
    });
}



module.exports = { userLogin }