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
      { expiresIn: "24h" }
    );
    let nData = { ...datos, token };
    console.log(nData)
    res.status(200).json(nData);
  } else {
    res.status(400).send("wrong information");
  }
};

module.exports = { userLogin };
