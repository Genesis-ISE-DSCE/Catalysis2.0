const mongoose = require('mongoose')

const events = [
 "Prompt Designer",
"Technical Quiz",
 "Lecture Series (Workshop)",
 "DSA SmackDown",
 "UI/UX Design",
 "CodeRed",
 "Technoseek",
 "Coding Relay Race",
]
const engineering_departments = [
    "Aeronautical Engineering",
    "Automobile Engineering",
    "Biotechnology",
    "Chemical Engineering",
    "Civil Engineering",
    "Electrical & Electronics Engineering",
    "Electronics & Communication Engineering",
    "Electronics & Instrumentation Engineering",
    "Mechanical Engineering",
    "Medical Electronics Engineering",
    "Electronics & Telecommunication Engineering",
    "Artificial Intelligence & Machine Learning",
    "Information Science & Engineering",
    "Master of Business Administration",
    "Master of Computer Applications",
    "Mathematics Department",
    "Physics Department",
    "Chemistry Department",
    "Computer Science and Engineering",
    "Computer Science and Business Systems",
    "Computer Science Engineering (Cyber Security)",
    "Computer Science Engineering (Data Science)",
    "Computer Science and Design"
];
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    usn: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required:true
    },
    emailId: {
        type: String,
        required: true
    },
    semester:{
        type:Number,
        required:true,
        enum:[1,2,3,4,5,6,7,8]
    },
    branch:{
        type:String,
        enum:engineering_departments,
        required:true
    },
    event:{
            type:String,
            enum:events
        }

    },{
    timestamps:true
});
const user = mongoose.model('User', userSchema)
module.exports = { user }