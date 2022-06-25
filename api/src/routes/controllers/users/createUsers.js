const { User } = require("../../../db");
const bcryptjs = require('bcryptjs');


const createUser = async(req, res) => {
	let { 
		name,
		email,
		password,
		membership,
		points,
		address 
	} = req.body;
	try {
		password = await bcryptjs.hash(password, 8);
		let newUser = await User.create({ name, email, password, membership, points, address });
		res.status(200).send(`User ${newUser.name} created successfully!`)
	} catch(error) {
		res.status(404).send("Error en el controlador createUser: " + error);
	}
}



module.exports = { createUser }