import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import bgImage from "../assets/registration-bg.png";
import logo from "../assets/logo.png";
import "../App.css";
import Axios from "axios";
const coc = require("../assets/docs/Catalysis Code Of Conduct.pdf");

function RegistrationForm() {

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [showError, setShowError] = useState('');
  const [isCheckboxTouched, setIsCheckboxTouched] = useState(false);

  const bgImageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative'
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    semester: '',
    branch: '',
    usn: '',
    transactionId: ''
  });

  const handleChange = (event) => {
    event.preventDefault();
    const name =event.target.name;
    const value = event.target.value;
    setFormData((values)=>({...values,[name]:value}))
  };

  const handleCheckboxChange = () => {
    setIsCheckboxTouched(true);
    setIsChecked(!isChecked);
  };

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  function handleOkError() {
    setShowError('');
  }

  function handleClick(event) {
    event.preventDefault();
    
    if(isChecked) {
      setFormErrors(validate(formData));
      if(Object.keys(validate(formData)).length===0) {
        // http://localhost:5000/api/v1/register
        Axios.post("https://catalysis2-0-backend.onrender.com/api/v1/register",formData)
        .then((res)=>{
          const response = res.data;
          console.log(response);
          setShowPopup(true);
          })
        .catch((err)=>{
          console.log(err);
          setShowError(err);
        })
      }
    }
    else {
      setIsCheckboxTouched(true);
    }
  }

  const handleOk = () => {
    navigate('/');
  }

  const validate = (formData) => {
    const errors = {};
    const regexemail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const regexphone = /^[0-9]{10}$/;
    if(!formData.name){
      errors.name = "Name is required!!";
    }
    if(!formData.email){
      errors.email = "Email is required!!";
    }else if(!regexemail.test(formData.email)){
      errors.email = "Invalid email!!";
    }
    if(!formData.phone){
      errors.phone = "Phone is required!!";
    }else if(!regexphone.test(formData.phone)){
      errors.phone = "Invalid phone number!!";
    }
    if(!formData.event){
      errors.event = "Event is required!!";
    }
    if(!formData.semester){
      errors.semester = "Semester is required!!";
    }
    if(!formData.branch){
      errors.branch = "Branch is required!!";
    }
    if(!formData.usn){
      errors.usn = "USN is required!!";
    }
    if(!formData.transactionId){
      errors.transactionId = "Tranasaction Id is required!!";
    }
    return errors;
  }

  return (
    <div id="registration" className="flex justify-center items-center relative" style={bgImageStyle}>
      <form className="shadow-md rounded-2xl px-8 pt-10 pb-8 mb-4 mt-16 lg:w-[40%]">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Registration Form</h2>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name || ""}
            onChange={handleChange}
            required
          />
          <p className="text-red-600">{formErrors.name}</p>
        </div>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
          <p className="text-red-600">{formErrors.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="phone">
            Phone Number:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="phone"
            name="phone"
            placeholder="Your Phone No.(Whatsapp)"
            value={formData.phone || ""}
            onChange={handleChange}
            required
          />
          <p className="text-red-600">{formErrors.phone}</p>
        </div>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="email">
            Event Name:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="event"
            name="event"
            value={formData.event || ""}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Event</option>
            <option value="PromptDesigner">Prompt Designer</option>
            <option value="TechnicalQuiz">Technical Quiz (Team Event)</option>
            <option value="LectureSeries(Workshop)">Lecture Series (Workshop)</option>
            <option value="DSASmackDown">DSA SmackDown</option>
            <option value="UI/UXDesign">UI/UX Design</option>
            <option value="CodeRed">CodeRed (Team Event)</option>
            <option value="Technoseek">Technoseek (Team Event)</option>
            <option value="CodingRelayRace">Coding Relay Race (Team Event)</option>
          </select>
          <p className="text-red-600">{formErrors.event}</p>
        </div>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="usn">
            USN:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="usn"
            name="usn"
            placeholder="Your USN"
            value={formData.usn || ""}
            onChange={handleChange}
            required
          />
          <p className="text-red-600">{formErrors.usn}</p>
        </div>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="sem">
            Semester:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="semester"
            name="semester"
            value={formData.semester || ""}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Semester</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
          </select>
          <p className="text-red-600">{formErrors.semester}</p>
        </div>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="branch">
            Branch:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="branch"
            name="branch"
            value={formData.branch || ""}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Branch</option>
            <option value="Aeronautical Engineering">Aeronautical Engineering</option>
            <option value="Automobile Engineering">Automobile Engineering</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Electrical & Electronics Engineering">Electrical & Electronics Engineering</option>
            <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
            <option value="Electronics & Instrumentation Engineering">Electronics & Instrumentation Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Medical Electronics Engineering">Medical Electronics Engineering</option>
            <option value="Electronics & Telecommunication Engineering">Electronics & Telecommunication Engineering</option>
            <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning</option>
            <option value="Information Science & Engineering">Information Science & Engineering</option>
            <option value="Master of Business Administration">Master of Business Administration</option>
            <option value="Master of Computer Applications">Master of Computer Applications</option>
            <option value="Mathematics Department">Mathematics Department</option>
            <option value="Physics Department">Physics Department</option>
            <option value="Chemistry Department">Chemistry Department</option>
            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
            <option value="Computer Science and Business Systems">Computer Science and Business Systems</option>
            <option value="Computer Science Engineering (Cyber Security)">Computer Science Engineering (Cyber Security)</option>
            <option value="Computer Science Engineering (Data Science)">Computer Science Engineering (Data Science)</option>
            <option value="Computer Science and Design">Computer Science and Design</option>
            <option value="Others">Others</option>
          </select>
          <p className="text-red-600">{formErrors.branch}</p>
        </div>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="transactionId">
            Transaction ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="transactionId"
            name="transactionId"
            placeholder="Enter Transaction ID"
            value={formData.transactionId || ""}
            onChange={handleChange}
            required
          />
          <p className="text-red-600">{formErrors.transactionId}</p>
        </div>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="transactionImg">
            Upload Tranasaction Image:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            id="transactionImg"
            name="transactionImg"
            placeholder=""
            required
          />
          <p className="text-red-600">{formErrors.transactionImg}</p>
        </div>

        <div className='pb-4'>
          <input type="checkbox" className='form-checkbox text-[#22C3FF]' id='agree' checked={isChecked} onChange={handleCheckboxChange}/>
          <label className='text-[#D4DFC7] pl-2 justify-center'>By registering you agree to our <a href={coc} rel='noreferrer noopener' target="_blank" className='text-purple-300'>Code of Conduct</a></label>
          {isCheckboxTouched && !isChecked && <p className='text-red-600'>Required*</p>}
        </div>

        <div className="flex items-center justify-end pt-4 pb-16">
          <button
            onClick={handleClick}
            className="bg-[#590793] hover:bg-[#490595] text-xl text-white font-bold py-2 px-4 rounded focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>

      {showPopup && (
        <div className="popup bg-[#381851] lg:w-[540px] lg:pt-8 md:w-[480px] md:pt-8 w-[320px] pt-0 rounded-2xl">
            <img className="lg:float-left lg:w-48 lg:h-auto md:float-left md:w-40 md:h-auto justify-center w-20 h-auto" src={logo} alt="Registration eva" />
          <div>
            <p className="font-poppins lg:text-2xl md:text-xl text-md text-center">Registration Successful !!</p>
            <p className="font-poppins lg:text-sm md:text-sm text-xs text-center">Check your mail for further updates.</p>
          </div>
          <div className='lg:pt-20 lg:pb-8 md:pt-16 md:pb-6 pt-2 pr-4'>
            <button onClick={handleOk} className="lg:text-xl shadow hover:bg-[#490595] hover:text-white focus:shadow-outline focus:outline-none text-black font-bold py-2 px-8 rounded text-sm" type="button">
              OK
            </button>
          </div>
        </div>
      )}

      {showError && (
        <div className="popup bg-[#381851] lg:w-[540px] lg:pt-8 md:w-[480px] md:pt-8 w-[320px] pt-0 rounded-2xl">
            <img className="lg:float-left lg:w-48 lg:h-auto md:float-left md:w-40 md:h-auto justify-center w-20 h-auto" src={logo} alt="Registration eva" />
            <div>
            <p className="font-poppins mb-4 lg:text-2xl md:text-xl text-sm text-red-500 text-center">You have already registered for this event!!</p>
          </div>
          <div className='lg:pt-20 lg:pb-8 md:pt-16 md:pb-6 pt-2 pr-4'>
            <button onClick={handleOkError} className="lg:text-xl shadow hover:bg-[#490595] hover:text-white focus:shadow-outline focus:outline-none text-black font-bold py-2 px-8 rounded text-sm" type="button">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
