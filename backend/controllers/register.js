const {user} = require('../database/UserModel')
const register = async (req, res) => {
    try {
        const { name, usn, phoneNumber, emailId, semester, branch, event } = req.body;
        const preExistingRegisteration = await user.findOne({
            usn,event
        }); //fetches any pre registered entries in the db
        
        if(preExistingRegisteration){ //if its done then restrict 
            return res.json({
                msg:'user already registered for this event',
                success:false
            })
        }
        const newRegisteration = new user({
            name, usn, phoneNumber, emailId, semester, branch, event
        })
        
        await newRegisteration.save(); 
        res.status(201).json({
            msg:'user created',
            success:true
        })
    }
    catch (error) {
        res.status(400).json({
            msg:'something went wrong',
            error:error,
            success:false
        })
    }
}
module.exports = {
    register
}
