const { Router } = require('express');
const router = Router()
const { createUser } = require('./controllers/users/createUsers');
const { getUsers } = require('./controllers/users/getUsers');
const { loginUser } = require('./controllers/users/login');
const { deleteUser } = require('./controllers/users/deleteUsers');


// Ruta para crear usuario
router.post('/create', createUser);


// Ruta para obtener usuarios (sólo para debugueo)
router.get('/', getUsers);


// Ruta para loguear un usuario existente (hay que arreglar el controlador)
router.get('/login', loginUser);


// Ruta para eliminar usuario
router.delete('/delete/:id', deleteUser);




module.exports = router