const jwt = require("jsonwebtoken");
const { User } = require("../../../db");
// const bcrypt = require("bcrypt");
const TOKEN_KEY= "x4ergEyzTEbTijup39kXHF657bR8l2v"

const userLogin = async (req, res) => {
  // try {
      const { email, password } = req.body;
  //     const user = await User.findOne({ where: { email: email } });

  //     const verifyPassword = user === null
  //         ? false
  //         : await bcrypt.compare(password, user.password)

  //         if(password !== user.password) {
  //             res.status(401).send("Contraseña incorrecta")
  //         } else if(!user && !verifyPassword) {
  //             res.status(401).json({ error: "Invalid user or password" })
  //         } else {
  //             const userForToken = {
  //                 id: user.id,
  //                 email: user.email,
  //                 membership: user.membership
  //             }

  //             const token = jwt.sign({ userForToken }, 'secretkey')

  //             res.status(200).json({
  //                 name: user.name,
  //                 email: user.email,
  //                 membership: user.membership,
  //                 token: token
  //             });
  //         }
  // } catch(error) {
  //     console.log(error)
  // }
 
  const user = await User.findOne({ where: { email: email } });
  if (email == user.email && password == user.password) {
    const datos = {
      id: user.id,
      email: user.email,
      membership: user.membership,
    };
    const token = jwt.sign(
      {id: datos.id, email: datos.email,membership:datos.membership },
      TOKEN_KEY,
      { expiresIn: "3h" }
    );
    let nData = { ...datos, token };
    console.log(nData)
    res.status(200).json(nData);
  } else {
    res.status(400).send("wrong information");
  }
};

// const userLogin = (req, res) => {
//     let { email, password } = req.body;
//         User.findOne({
//             where: {
//                 email: email,
//             }
//         }).then(user => {
//             if(!user) {
//                 res.status(404).json({ msg: "Usuario no encontrado" })
//             } else {
//                 if(bcrypt.compare(password, user.password)) {
//                     // Devolvemos token
//                     let token =jwt.sign({ user: user }, 'secretkey', {
//                         expiresIn: "1h"
//                     })
//                     res.json({
//                         user: user,
//                         token: token
//                     })
//                 } else {
//                     // Acceso no autorizado
//                     res.status(401).json({ msg: "Contraseña incorrecta" })
//                 }
//             }
//         })

// }

module.exports = { userLogin };
