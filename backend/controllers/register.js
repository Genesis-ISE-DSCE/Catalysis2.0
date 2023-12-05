const Registration = require("../models/register");
const nodemailer = require('nodemailer');
const path = require('path');

const register = async (req, res) => {
    try {
        
        const { name, usn, phone, email, semester, branch, event } = req.body;

        const preExistingRegisteration = await Registration.findOne({ usn, event });
        // console.log(preExistingRegisteration);
        
        if(preExistingRegisteration){
            return res.status(500).json({
                error: {
                    msg: 'You have already registered for this event!',
                    success: false
                }
            });
        }

        async function mailSystem() {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port : 465,
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
                html:   `<div>
                        <p>Your registration is successfull!</p> 
                        <p>The whatsapp link will be shared soon. Kindly check your mail for further updates.</p>
                        </div>`,
                attachments: [pdfAttachment1, pdfAttachment2],
            });
        }

        const newRegisteration = await Registration.create(req.body);
        
        if(newRegisteration) {
            await mailSystem();
        }
        
        res.status(201).json({ newRegisteration });
    }
    catch (error) {
        res.status(500).json({
            error: {
                msg: 'Error occured during registrartion. Try again later!',
                success: false
            }
        });
       
    }
}

const getRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find({});
        res.status(200).json({ registrations });
    } 
    catch (error) {
        res.status(500).json({
            msg: 'Something went Wrong!!',
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
    }
    catch (error) {
        res.status(500).json({
            msg: 'Something went Wrong!!',
            success: false
        });
    }
}

module.exports = {
    register,
    getRegistrations,
    getEventDetails
}