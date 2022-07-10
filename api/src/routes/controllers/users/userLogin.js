const jwt = require("jsonwebtoken");
const { User } = require("../../../db");
// const bcrypt = require("bcrypt");
// const TOKEN_KEY = "x4ergEyzTEbTijup39kXHF657bR8l2v";

const userLogin = async (req, res) => {
  const { email, name, picture } = req.body;

  console.log("data", email, name,picture)
  
  let consulta = await User.findOne({
    where: {
      email: email
    }
  });
  const [user,created] = await User.findOrCreate({ where: { email: email }, defaults:{

    email: email,
    name: name,
    image: picture,


     } });

  if(created) console.log('i am here!')
  res.status(200).json(user)




};

//   if (consulta == null) {
//     let user = await User.create({
//       name,
//       email,
//       subscribed,
     
//     });

//     return res.json(user)
//   } else {
//     return res.json(consulta)

// };
// }
module.exports = { userLogin };
