import React, { useState } from "react";
import catalysis from "../assets/catalysis.png";
import { Link } from 'react-router-dom';
import "../components/styles/events.module.css";


const Navbar = () => {

  const handleItemClick = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
   
  };

  const [navIcon, setNavIcon] = useState("menu");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavIcon = () => {
    if (navIcon === "menu") {
      setNavIcon("close");
      setIsDropdownOpen(true);
    }
    else {
      setNavIcon("menu");
      setIsDropdownOpen(false);
    }
  }

  return (
      <nav className="fixed top-0 left-0 right-0 bg-[#28143a] bg-opacity-80 flex justify-between items-center z-10 px-3  py-1 lg:py-1 h-8.2 lg:h-18">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2 w-full md:w-auto">
          <a href="/" className="lg:hidden md:hidden flex items-stretch justify-between">
            <img src={catalysis} className="h-8" alt="Catalysis Logo" />
          </a>
        <ion-icon onClick={toggleNavIcon} name={navIcon} class="text-white cursor-pointer text-3xl md:hidden lg:hidden"></ion-icon>
      <div class={`text-xl w-full md:block md:w-auto ${isDropdownOpen ? 'block' : 'hidden'}`} id="navbar-default">
        <ul class=" flex flex-col p-0 md:p-0 mt-4  md:flex-row lg:space-x-8 md:space-x-2 md:text-sm md:mt-0 md:border-0 ">
           
          <li>
            <Link to="/" onClick={() => handleItemClick("landing")} className="text-[#F4D9D9] 
            lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline mb-1" aria-current="page">Home</Link>
          </li>
           
          <li>
            <Link to="/#about" onClick={() => handleItemClick("about")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline mb-1">About</Link>
          </li>
           
          <li>

            <Link to="/#events" onClick={() => handleItemClick("events")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline mb-1">Events</Link>
          </li>
           
          {/* <li>
            <Link to="/#schedule" onClick={() => handleItemClick("schedule")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Schedule</Link>
          </li> */}
          <li>
            <Link to="/#gallery" onClick={() => handleItemClick("gallery")} className="text-[#F4D9D9] hidden lg:block lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline mb-1">Gallery</Link>
          </li>
           
          <li>
            <Link to="/#sponsors" onClick={() => handleItemClick("sponsors")} className="text-[#F4D9D9] hidden lg:block lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Sponsors</Link>
          </li>
          
          <li>
            <Link to="/#faqs" onClick={() => handleItemClick("faqs")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline mb-1">Faq's</Link>
          </li>
        
          <li>
            <Link to="/#contact" onClick={() => handleItemClick("contact")} className="text-[#F4D9D9] 
            hidden lg:block lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Contact</Link>
          </li>
           
          <li>
            <Link to="/registration" onClick={() => handleItemClick("registration")} className="tagline text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline mb-1">Register</Link>
          </li> 
        </ul>
      </div>
  </div>
</nav>
  );
};

export default Navbar;
