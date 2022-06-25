const { User } = require('../../../db');

const deleteUser = async(req, res) => {
	const { id } = req.params;
	try {
		const deleted = await User.destroy({
			where: {
				id: id
			}
		});
		res.status(200).json({ msg: `User deleted successfully!` });
	} catch(error) {
		res.status(404).json({ msg: `Error in controller deleteUser: ${error}`})
	}
}



module.exports = { deleteUser }