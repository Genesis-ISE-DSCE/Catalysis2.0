const nodemailer = require("nodemailer");

const {user} = require('../database/UserModel')
const register = async (req, res) => {
    try {
        const { name, usn, phoneNumber, emailId, semester, branch } = req.body;
       
        const newRegisteration = new user({
            name, usn, phoneNumber, emailId, semester, branch
        })
       
        const res = await newRegisteration.save();
        console.log(res)

        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.NODEMAILER_USER,
              pass: process.env.NODEMAILER_PASS,
            },
          });
        
          async function main() {
            const info = await transporter.sendMail({
              from: process.env.NODEMAILER_USER,
              to: emailId,
              subject: "Catalysis Registration",
              text: "Your Registration was successful!",
              html: "<h3>Your Registration was Successful!</h3>",
            });
            console.log("Registration message sent: %s", info.messageId);
        }

        main();

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
