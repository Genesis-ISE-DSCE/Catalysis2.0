const {user} = require('../database/UserModel')
const register = async (req, res) => {
    try {
        const { name, usn, phoneNumber, emailId, semester, branch, events } = req.body;
       
        const newRegisteration = new user({
            name, usn, phoneNumber, emailId, semester, branch, events
        })
        //console.log(newRegisteration)
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
