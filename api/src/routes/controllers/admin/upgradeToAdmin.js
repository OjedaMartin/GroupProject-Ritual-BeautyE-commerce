const { User } = require('../../../db');

const upgradeToAdmin = async (req, res, next) => {
    let {email} = req.body;
    console.log(email)
    try{
        let userCheck = await User.findOne({
            where:{
                email: email,
            }
        })
        if(userCheck){
            await userCheck.update({
                membership: 'Admin',
            })
            res.status(200).send(`User ${userCheck.name} has been made an Admin.`)
        } else{
            res.status(400).send("User not found.")
        }
    }catch(e){
        next(e);
    }
}

module.exports = {upgradeToAdmin}