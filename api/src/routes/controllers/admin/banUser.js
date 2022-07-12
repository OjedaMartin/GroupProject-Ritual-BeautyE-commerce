const { User } = require('../../../db');

const banUser = async (req, res, next) => {
    let { userId } = req.body;
    try{
        let userCheck = await User.findOne({
            where:{
                id: userId,
            }
        })
        if(userCheck){
            await userCheck.update({
                membership: 'Banned',
            })
            res.status(200).send(`User ${userCheck.name} has been banned from making reviews.`)
        } else{
            res.status(400).send("User not found.")
        }
    }catch(e){
        next(e);
    }
}

module.exports = {banUser}