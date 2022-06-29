const { Router } = require('express');
const { userLogin } = require('./controllers/users/userLogin');
const { userRegister } = require('./controllers/users/userRegister');
const { getUsers } = require('./controllers/users/getUsers');


const router = Router()

// Ruta para loguear un usuario:
router.post('/login', userLogin);

// Ruta para regisrar un nuevo usuario y cargarlo a la db
router.post('/register', userRegister);

// Ruta para obtener todos los usuarios
router.get('/', getUsers)




module.exports = router