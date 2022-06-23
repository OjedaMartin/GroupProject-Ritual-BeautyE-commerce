const {User} = require(".././db");
const { Router } = require('express');
const bcryptjs = require('bcryptjs');


const router = Router()


router.post('/create', async (req, res) => {

    try {
        let { name,email,password,membership,points,address} = req.body;
       password = await bcryptjs.hash(password, 8)
       
        User.create({ name, email, password, membership, points, address })

        res.send("User created")

    } catch (error) {
        
        res.send(error+" No se pudo crear Usuario, controlar datos ingresados")
    }
  })
  router.get('/all', async(req,res)=>{
    try {let resp = await User.findAll()
        res.json(resp)

    } catch (error) {
        res.send(error, 'No se pudo mostrar usuiarios')
    }
  })
  router.get('/login', async(req,res)=>{
    try {
        let {email, password} = req.body
        password = await bcryptjs.hash(password, 8)
        let resp = User.findOne({where: {email:email}})
        if(resp){
            let resp1 = User.findOne({where: {password:password}})
            if(resp1) {res.send(' Sesion Iniciada ')} 
            else{res.send('Contraseña Incorrecta')}
            
        }else {res.send('Usuario no existente')}
    } catch (error) {
        res.send(error, 'Verificar codigo login')
    }
})
  module.exports = router