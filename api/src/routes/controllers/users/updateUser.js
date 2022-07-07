// // Controler para actualizar datos de un usuario
// const { User } = require('../../../db');

// const updateUser = async(req, res) => {
//     const { name, email, password, membership, address } = req.body;
//     const { id } = req.params;
//     try {
//         const user = await User.update({
//             name: name,
//             email: email,
//             password: password,
//             membership: membership,
//             address: address
//         }, {
//             where: {
//                 id: id
//             }
//         });
//         res.status(200).json({ msg: "User updated", user: user })
//     } catch(error) {
//         res.status(404).json({ error: "Error en el controller updateUser: " + error });
//     }
// }


// module.exports = { updateUser }
// Controler para actualizar datos de un usuario
const { User } = require('../../../db');

const updateUser = async(req, res) => {
    const { name,/* email, password, membership,*/ address } = req.body;
    const { email } = req.params;
    try {
        const user = await User.update({
            name: name,
            // email: email,
            // password: password,
            // membership: membership,
            address: address
        }, {
            where: {
                email: email
            }
        });
        res.status(200).json({ msg: "User updated", user: user })
    } catch(error) {
        res.status(404).json({ error: "Error en el controller updateUser: " + error });
    }
}


module.exports = { updateUser }