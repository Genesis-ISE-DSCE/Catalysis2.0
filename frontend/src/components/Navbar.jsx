import React, { useState } from "react";
import catalysis from "../assets/catalysis.png";
import { Link } from 'react-router-dom';

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
      <nav className="fixed top-0 left-0 right-0 bg-[#28143a] bg-opacity-80 flex justify-between items-center z-10 px-5 py-1 lg:py-1 h-8.2 lg:h-18">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2 w-full md:w-auto">
          <a href="/#landing" className="lg:hidden md:hidden flex items-stretch justify-between">
            <img src={catalysis} className="h-8" alt="Catalysis Logo" />
          </a>
        <ion-icon onClick={toggleNavIcon} name={navIcon} class="text-white cursor-pointer text-3xl md:hidden lg:hidden"></ion-icon>
      <div class={`w-full md:block md:w-auto ${isDropdownOpen ? 'block' : 'hidden'}`} id="navbar-default">
        <ul class="font-medium flex flex-col p-0 md:p-0 mt-4  md:flex-row lg:space-x-8 md:space-x-2 md:text-sm md:mt-0 md:border-0 ">
          <li>
            <button onClick={() => handleItemClick("landing")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline" aria-current="page">Home</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("about")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">About</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("events")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Events</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("schedule")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Schedule</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("gallery")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Gallery</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("sponsors")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Sponsors</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("faqs")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Faq's</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("contact")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Contact</button>
          </li>
          <li>
            <Link to="/form">
            <button onClick={() => handleItemClick("form")} className="text-[#F4D9D9] lg:text-2xl md:text-lg font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Register</button>
            </Link>
          </li>
        </ul>
      </div>
  </div>
</nav>
  );
};

export default Navbar;
