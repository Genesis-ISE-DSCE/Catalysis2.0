const Registration = require("../models/register");
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port : 465,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

const mailAll = async(req, res) => {
    try {
        const { user, subject, body, event } = req.body;
        if ( user === process.env.USER_AUTH ) {

            let users;

            if (event === 'All') {
                users = await Registration.find();
                console.log(users);
            } else {
                users = await Registration.find({ event: event });
                console.log("Idk");
            }
    
            const emails = users.map(user => user.email);
            const uniqueEmail = [...new Set(emails)];
            console.log(uniqueEmail);
        
            // Send emails
            for (const email of uniqueEmail) {
                console.log(email);
                const mailOptions = {
                    from: process.env.MAIL_USER,
                    to: email,
                    subject: subject,
                    text: body,
                };
                await transporter.sendMail(mailOptions);
            }
        
            res.status(200).send('Emails sent successfully');
        }
        else {
            res.status(300).send('Invalid User');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { mailAll }