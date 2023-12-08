const Registration = require("../models/register");
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const attachmentDocsPath = [
    {
        "filename": "PromptDesigner-Rulebook", 
        "path": path.join(__dirname, '../assets/Prompt Designer Rulebook.pdf'),
    },
    {
        "filename": "TechnicalQuiz-Rulebook",
        "path": path.join(__dirname, '../assets/Technical Quiz Rulebook.pdf'),
    },
    {
        "filename": "LectureSeries(Workshop)-Rulebook",
        "path": path.join(__dirname, '../assets/Code Of Conduct.pdf'),
    },
    {
        "filename": "DSASmackDown-Rulebook",
        "path": path.join(__dirname, '../assets/DSA Smackdown Rulebook.pdf'),
    },
    {   
        "filename": "UI/UXDesign-Rulebook",
        "path": path.join(__dirname, '../assets/UI_UX Design Rulebook.pdf'),
    },
    {
        "filename": "CodeRed-Rulebook",
        "path": path.join(__dirname, '../assets/CodeRed Rulebook.pdf'),
    },
    {
        "filename": "Technoseek-Rulebook",
        "path": path.join(__dirname, '../assets/TechnoSeek Rulebook.pdf'),
    },
    {
        "filename": "CodingRelayRace-Rulebook",
        "path": path.join(__dirname, '../assets/Coding Relay Race Rulebook.pdf'),
    },
    {
        "filename": "Terms&Conditions",
        "path": path.join(__dirname, '../assets/Terms and Conditions.pdf'),
    },
    {
        "filename": "CodeOfConduct",
        "path": path.join(__dirname, '../assets/Code Of Conduct.pdf'),
    },
];

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

const mailAll = async (req, res) => {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Origin', 'https://isecatalysis.in');
      res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.setHeader('Access-Control-Allow-Headers',
   
  'Content-Type, Authorization');
      res.status(200).send();
      return;
    }
  
    // Handle POST requests
    try {
      const { user, subject, body, event, attachmentDocs } = req.body;
  
      if (user === process.env.USER_AUTH) {
        let users;
  
        if (event === 'All') {
          users = await Registration.find();
        } else {
          users = await Registration.find({ event: event });
        }
  
        let pdfAttachment = null;
  
        if (attachmentDocs !== "") {
          const pdfAttachment = {
            contentType: "application/pdf",
          };
  
          for (const attach of attachmentDocsPath) {
            if (attach.filename === attachmentDocs) {
              pdfAttachment.filename = attach.filename;
              pdfAttachment.path = attach.path;
              break;
            }
          }
        }
  
        const emails = users.map(user => user.email);
        const uniqueEmail = [...new Set(emails)];
  
        for (const email of uniqueEmail) {
          const mailOptions = {
            from: process.env.MAIL_USER,
            to: email,
            subject: subject,
            text: body,
            attachments: pdfAttachment,
          };
          await transporter.sendMail(mailOptions);
        }
  
        res.status(200).send('Emails sent successfully');
      } else {
        res.status(401).send('Unauthorized Access');
      }
    } catch (error) {
      console.error('Error sending emails:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  module.exports = { mailAll };