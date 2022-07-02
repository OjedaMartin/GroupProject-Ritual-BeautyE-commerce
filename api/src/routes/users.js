const { Router } = require('express');
const { userLogin } = require('./controllers/users/userLogin');
const { userRegister } = require('./controllers/users/userRegister');
const { getUsers } = require('./controllers/users/getUsers');
const { isAuth } = require('./controllers/auth/auth');
const { userLogout } = require('./controllers/users/userLogout');


const router = Router()

// Ruta para loguear un usuario:
router.post('/login', userLogin);

// Ruta para regisrar un nuevo usuario y cargarlo a la db
router.post('/register', userRegister);

// Ruta para obtener todos los usuarios
// isauth
router.get('/', getUsers)

// Ruta para desloguearse
router.post('/logout', userLogout);




module.exports = router