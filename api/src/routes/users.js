const { Router } = require('express');
const { userLogin } = require('./controllers/users/userLogin');
const { userRegister } = require('./controllers/users/userRegister');
const router = Router()
const { getUsers } = require('./controllers/users/getUsers');

// Ruta para loguear un usuario:
router.post('/login', userLogin);

router.post('/register', userRegister)

router.get('/', getUsers)




module.exports = router