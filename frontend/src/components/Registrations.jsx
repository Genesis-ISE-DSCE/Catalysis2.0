import React, { useState } from 'react';
// import image from '../assets/2.png';
// import imageavif from '../assets/2.avif';
// import imagewebp from '../assets/2.webp';
import bgImage from "../assets/registration-bg.png";

function RegistrationForm() {

  const bgImageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 'w-scren',
    position: 'relative'  
};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    sem: '',
    branch: '',
    usn: '',
  });

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleTeammateInputChange = (teammate, e) => {
  //   setFormData({
  //     ...formData,
  //     [teammate]: e.target.value,
  //   });
  // };

  {/*const inputMappings = [
    {
      value: 'CodeRed',
      inputFields: [
        {
          label: 'Teammate 2 Name:',
          name: 'name2',
          phone: 'Phone No. 2',
        },
        {
          label: 'Teammate 3 Name:',
          name: 'name3',
          phone: 'Phone No. 3',
        },
        {
          label: 'Teammate 4 Name:',
          name: 'name4',
          phone: 'Phone No. 4',
        },
        // {
        //   phone: 'phone2',
        // },
        // {
        //   phone: 'phone3',
        // },
        // {
        //   phone: 'phone4',
        // },
      ],
    },
    {
      value: 'Technical-Quiz',
      inputFields: [
        {
          label: 'Teammate 2 Name:',
          name: 'name2',
          phone: 'Phone No. 2',
        },
        {
          label: 'Teammate 3 Name:',
          name: 'name3',
          phone: 'Phone No. 3',
        },
        {
          label: 'Teammate 4 Name:',
          name: 'name4',
          phone: 'Phone No. 4',
        },
      ],
    },
    {
      value: 'CodingRelayRace',
      inputFields: [
        {
          label: 'Teammate 2 Name:',
          name: 'name2',
          phone: 'Phone No. 2',
        },
        {
          label: 'Teammate 3 Name:',
          name: 'name3',
          phone: 'Phone No. 3',
        },
        {
          label: 'Teammate 4 Name:',
          name: 'name4',
          phone: 'Phone No. 4',
        },
      ],
    },
    {
      value: 'Technoseek',
      inputFields: [
        {
          label: 'Teammate 2 Name:',
          name: 'name2',
          phone: 'Phone No. 2',
        },
        {
          label: 'Teammate 3 Name:',
          name: 'name3',
          phone: 'Phone No. 3',
        },
        {
          label: 'Teammate 4 Name:',
          name: 'name4',
          phone: 'Phone No. 4',
        },
      ],
    },
  ];
  */}

  {/*const renderConditionalInputs = () => {
    const selectedMapping = inputMappings.find((mapping) => mapping.value === selectedOption);

    if (selectedMapping) {
      return selectedMapping.inputFields.map((field, index) => (
        <>
        <div key={index} className="mb-4">
          <label className="block text-[#F4D9D9] text-sm font-bold mb-2" htmlFor={field.name}>
            {field.label}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id={field.name}
            name={field.name}
            placeholder={`Teammate Name `}
            value={formData[field.name]}
            onChange={(e) => handleTeammateInputChange(field.name, e)}
            required
          />
        </div>
        <div key={index} className="mb-4">
          <label className="block text-[#F4D9D9] text-sm font-bold mb-2" htmlFor={field.phone}>
            {field.phone}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id={field.phone}
            name={field.phone}
            placeholder={`Teammate Ph Number`}
            value={formData[field.phone]}
            onChange={(e) => handleTeammateInputChange(field.phone, e)}
            required
          />
        </div>
       </>
      ));
    }

    return null;
  };*/}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center relative h-screen " style={bgImageStyle}>
      {/* <div className="absolute top-0 left-28 w-1/4 mt-16 ml-12">
        <picture>
          <source type="image/avif" srcSet={imageavif} />
          <source type="image/webp" srcSet={imagewebp} />
          <img src={image} loading="lazy" alt="Mascot" className="w-56 h-auto transform scale-x-[-1]" />
        </picture>
      </div> */}
      <form className="shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 mt-16 lg:w-[40%]" onSubmit={handleSubmit}>
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
            value={formData.name}
            onChange={handleChange}
            required
          />
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
            value={formData.email}
            onChange={handleChange}
            required
          />
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
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Other input fields */}
        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="email">
            Event Name:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dropdown"
            name="dropdown"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="" disabled>Select Event</option>
            <option value="PromptDesigner">Prompt Designer</option>
            <option value="TechnicalQuiz">Technical Quiz (Team Event)</option>
            <option value="LectureSeries(Workshop)">Lecture Series (Workshop)</option>
            <option value="DSASmackDown">DSA SmackDown</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="CodeRed">CodeRed (Team Event)</option>
            <option value="Technoseek">Technoseek (Team Event)</option>
            <option value="CodingRelayRace">Coding Relay Race (Team Event)</option>
          </select>
        </div>

        {/* {renderConditionalInputs()} */}
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
            value={formData.usn}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="sem">
            Semester:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sem"
            name="sem"
            value={formData.sem}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select your semester</option>
            <option value="1">Semester 1</option>
            <option value="3">Semester 3</option>
            <option value="5">Semester 5</option>
            <option value="7">Semester 7</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-lg font-bold mb-2" htmlFor="branch">
            Branch:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select your branch</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Science">Information Science</option>
            <option value="Electronics and Communication">Electronics and Communication</option>
            <option value="Mechanical Engineering">Artificial Intelligence and ML</option>
            <option value="Electrical and Electronics">Computer Science and Design</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Aeronautical Engineering">Aeronautical Engineering</option>
            <option value="Aeronautical Engineering">Others</option>
            {/* Add more branches as needed */}
          </select>
        </div>

        <div className="flex items-center justify-end pt-4">
          <button
            className="bg-[#590793] hover:bg-[#7705ff] text-xl text-white font-bold py-2 px-4 rounded focus:text-2xl focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;

{/* <div className="absolute top-0 left-28 w-1/4 mt-16 ml-12">
        <picture>
          <source type="image/avif" srcSet={imageavif} />
          <source type="image/webp" srcSet={imagewebp} />
          <img src={image} loading="lazy" alt="Mascot" className="w-56 h-auto transform scale-x-[-1]" />
        </picture>
      </div> */}


// import image from '../assets/2.png';
// import imageavif from '../assets/2.avif';
// import imagewebp from '../assets/2.webp';