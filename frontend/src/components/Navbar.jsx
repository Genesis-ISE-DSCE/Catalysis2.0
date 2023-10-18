import React from "react";

const Navbar = () => {
  const handleItemClick = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed py-4">
      <nav className="justify-center">
          <ul className="flex space-x-8 ">
            <li className="nav-li">
              <button
                className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
                onClick={() => handleItemClick("landing")}
              >
                Home
              </button>
            </li>

            <li className="nav-li">
              <button
                className=" text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
                onClick={() => handleItemClick("about")}
              >
                About
              </button>
            </li>

            <li className="nav-li">
              <button
                className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
                onClick={() => handleItemClick("events")}
              >
                Events
              </button>
            </li>

            <li className="nav-li">
              <button
                className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
                onClick={() => handleItemClick("schedule")}
              >
                Schedule
              </button>
            </li>

            <li className="nav-li">
              <button
                className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
                onClick={() => handleItemClick("gallery")}
              >
                Gallery
              </button>
            </li>

            <li className="nav-li">
              <button
                className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
                onClick={() => handleItemClick("sponsors")}
              >
                Sponsors
              </button>
            </li>

            <li className="nav-li">
              <button
                className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
                onClick={() => handleItemClick("faqs")}
              >
                FAQs
              </button>
            </li>

            <li className="nav-li">
              <button
                className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
                onClick={() => handleItemClick("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
