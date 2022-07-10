const { User } = require('../../../db');

const banUser = async (req, res, next) => {
    let {email} = req.body;
    try{
        await User.update({ membership: "Banned" }, {
            where: {
              email: email
            }
          });
    }catch(e){
        next(e);
    }
}

module.exports = {banUser}