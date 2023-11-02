import React, { useState } from 'react';
// import { Suspense } from 'react';
import image from "../assets/2.png";
import imageavif from "../assets/2.avif"
import imagewebp from "../assets/2.webp"
// const Navbar = React.lazy(()=>import('../components/Navbar'));

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    sem: '',
    branch: '',
    usn: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to a server.
    console.log(formData);
  };

  return (
    <>
    {/* <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
            </Suspense>  */}
    <div className="flex justify-center items-center h-max relative " style={{backgroundColor: "#29153D"}}>
       <div className="absolute top-0 left-0 w-1/4 mt-16 ml-12 ">
      <picture>
        <source type="image/avif" srcSet={imageavif} />
        <source type="image/webp" srcSet={imagewebp} />
        <img src={image} loading="lazy" alt="Mascot" className="w-48 h-auto transform scale-x-[-1]" /> {/* Increase the size as needed */}
      </picture>
    </div>
      <form className="bg-white shadow-md rounded px-16 pt-6 pb-8 mb-4 mt-5" style={{backgroundColor: "#21083b"}} onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Registration Form</h2>
        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-sm font-bold mb-2" htmlFor="name">
            Name
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
          <label className="block text-[#F4D9D9] text-sm font-bold mb-2" htmlFor="email">
            Email
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
        {/* <div className="mb-4">
          <label className="block text-[#F4D9D9] text-sm font-bold mb-2" htmlFor="">
            Phone Number:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="number"
            name="number"
            placeholder="Your Phone No.(Whatsapp)"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-sm font-bold mb-2" htmlFor="email">
          Phone Number:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="phone"
            name="phone"
            placeholder="Your Ph No.(Whatsapp)"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-sm font-bold mb-2" htmlFor="name">
            Event Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="event"
            name="event"
            placeholder="Name of the event"
            value={formData.event}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-sm font-bold mb-2" htmlFor="email">
           USN:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="usn"
            name="usn"
            placeholder="Your USN"
            value={formData.usn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-sm font-bold mb-2" htmlFor="email">
           Semester:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="sem"
            name="sem"
            placeholder="Your Semester"
            value={formData.sem}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#F4D9D9] text-sm font-bold mb-2" htmlFor="name">
            Branch
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="branch"
            name="branch"
            placeholder="Your Branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-grey text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default RegistrationForm;
