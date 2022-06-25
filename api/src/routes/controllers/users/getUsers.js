const { User } = require('../../../db');


const getUsers = async(req, res) => {
	try {
		const users = await User.findAll();
		res.status(200).send(users);
	} catch(error) {
		res.status(404).send(`Error en el controller getUsers: ${error}`)
	}
}



module.exports = { getUsers }