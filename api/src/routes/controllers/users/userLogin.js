const jwt = require("jsonwebtoken");
const { User } = require("../../../db");
// const bcrypt = require("bcrypt");
// const TOKEN_KEY = "x4ergEyzTEbTijup39kXHF657bR8l2v";

const userLogin = async (req, res) => {
  const { email, name, image } = req.body;
  const user = await User.findOrCreate({ where: { email: email } });
  if (user === null) {
    const datos = {
      id: id,
      email: email,
      name: name,
      image: image,
      membership: membership,
      address: address,
      points: points,
    };

    res.status(200).json(datos);
  }
  {
    res.status(400).send("wrong information");
  }
};

module.exports = { userLogin };