const {User} = require("../../../db");

const updateSubscription = async (req, res, next)=>{
    let {subscription, email} = req.body;
    try{
        await User.update({
            subscribed: subscription,
        },{
            where:{
                email: email,
            }
        });
        if(subscription) res.send(`User has been added to our notification program!`);
        else res.send(`User has been removed from our notification program!`);
    }catch(e){
        next(e);
    }
}

module.exports = {updateSubscription}