const Registration = require("../models/register");
const nodemailer = require('nodemailer');
const path = require('path');

const mailSystem = async (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD
                }
            });

            const pdfAttachment1 = {
                filename: 'Code of Conduct',
                path: path.join(__dirname, '../assets/Code Of Conduct.pdf'),
                contentType: "application/pdf",
            };

            const pdfAttachment2 = {
                filename: 'Terms & Conditions',
                path: path.join(__dirname, '../assets/Terms and Conditions.pdf'),
                contentType: "application/pdf",
            };

            await transporter.sendMail({
                from: process.env.MAIL_USER,
                to: email,
                subject: 'Catalysis2.0 Registration',
                html: `<div>
                            <p>Your registration is successful!</p> 
                            <p>The WhatsApp link will be shared soon. Kindly check your mail for further updates.</p>
                        </div>`,
                attachments: [pdfAttachment1, pdfAttachment2],
            });

            resolve();
        } catch (error) {
            console.error('Error sending mail:', error);
            reject(error);
        }
    });
};

const register = async (req, res) => {
    try {
        const { name, usn, phone, email, semester, branch, event } = req.body;

        const preExistingRegistration = await Registration.findOne({ usn, event });

        if (preExistingRegistration) {
            return res.status(400).json({
                error: {
                    msg: 'You have already registered for this event!',
                    success: false
                }
            });
        }

        const newRegistration = await Registration.create(req.body);
        res.status(201).json({ newRegistration });

        mailSystem(email)
            .then(() => {
        console.log('Mail sent successfully!');
    })
            .catch((error) => {
        console.error('Error sending mail:', error);
});
    }
    catch (error) {
        res.status(500).json({
            error: {
                msg: 'Error occurred during registration. Try again later!',
                success: false

            }
        });
    }
}

const getRegistrations = async (req, res) => {
    try {
        const authorizationHeader = req.headers.authorization;
        console.log(authorizationHeader);
        if (authorizationHeader !== process.env.USER_AUTH) {
            return res.status(401).json({
              msg: 'Unauthorized access',
              success: false,
            });
        }

        const registrations = await Registration.find({});
        res.status(200).json({ registrations });
    } catch (error) {
        console.error('Error getting registrations:', error);
        res.status(500).json({
            msg: 'Error getting registrations. Try again later!',
            success: false
        });
    }
}

const getEventDetails = async (req, res) => {
    try {
        console.log(req.query);
        const { category } = req.query;

        let allEvent;
        if (category) {
            allEvent = await Registration.find({ event: category });
        } else {
            allEvent = await Registration.find({});
        }

        res.status(200).json({ allEvent });
    } catch (error) {
        console.error('Error getting event details:', error);
        res.status(500).json({
            msg: 'Error getting event details. Try again later!',
            success: false,
        
        });
    }
}

module.exports = {
    register,
    getRegistrations,
    getEventDetails
};
