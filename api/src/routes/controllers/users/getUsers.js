// Controller para traer todos los usuarios creados de la base de datos
const { User } = require('../../../db');
const exprees= require('express')
const cors= require('cors')
const app= exprees()
const jwt= require("jsonwebtoken")
app.use(exprees.json())
app.use(cors())
// const TOKEN_KEY= "x4ergEyzTEbTijup39kXHF657bR8l2v"
// const verifyT= (req,res,next)=>{
//     const authHeader= req.headers["authorization"]
//     const token= authHeader && authHeader.split(" ")[1];
//     console.log(authHeader)
//     if (token==null)
//         return res.status(401).send("token required");
//         jwt.verify(token,TOKEN_KEY,(err,user)=>{
//             if (err)
//                 return res.status(403).send("Invalid token")
//                 console.log(user)
//                 req.user=user
//                 next()
            
//         })
    
// }

const getUsers = async (req, res) => {
    try {
        
        const users = await User.findAll();
        // const token= verifyT(users)
        res.send(users)
    } catch(error) {
        res.send(error)
    }
}


module.exports = { getUsers }