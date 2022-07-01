// Controller para buscar un usuario por correo (como si fuera por id pero por email)
const { User } = require('../../../db');


const getUserByName = async(req, res) => {
    const { name } = req.params;
    try {
        const user = await User.findOne({
            where: {
                name: name
            }
        });
        res.status(200).json(user)
    } catch(error) {
        res.status(400).json({ error: "Ha ocurrido un error en el controller getUserByName " + error })
    }
}



module.exports = { getUserByName }