const { Router } = require('express');
const { userLogin } = require('./controllers/users/userLogin');
const { userRegister } = require('./controllers/users/userRegister');
const { getUsers } = require('./controllers/users/getUsers');
const { isAuth } = require('./controllers/middlewares/auth');
const { userLogout } = require('./controllers/users/userLogout');
const { getUserByName } = require('./controllers/users/getUserByName');
const { updateUser } = require('./controllers/users/updateUser');


const router = Router()

// Ruta para loguear un usuario:
router.post('/login', userLogin);

// Obtener un usuario por medio del email que se le pasa por params
router.get('/:name', getUserByName);

// Ruta para regisrar un nuevo usuario y cargarlo a la db
router.post('/register', userRegister);

// Ruta para obtener todos los usuarios
router.get('/', getUsers)

// Ruta para desloguearse
router.post('/logout', userLogout);

// Ruta para actualizar datos de un usuario
router.put('/update/:email', updateUser);




module.exports = router