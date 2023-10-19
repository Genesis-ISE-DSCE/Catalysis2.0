import React from "react";

const Navbar = () => {
  const handleItemClick = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // <div className="fixed py-4">
    //   <nav className="justify-center">
    //       <ul className="flex space-x-8 ">
    //         <li className="nav-li">
    //           <button
    //             className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
    //             onClick={() => handleItemClick("landing")}
    //           >
    //             Home
    //           </button>
    //         </li>

    //         <li className="nav-li">
    //           <button
    //             className=" text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
    //             onClick={() => handleItemClick("about")}
    //           >
    //             About
    //           </button>
    //         </li>

    //         <li className="nav-li">
    //           <button
    //             className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
    //             onClick={() => handleItemClick("events")}
    //           >
    //             Events
    //           </button>
    //         </li>

    //         <li className="nav-li">
    //           <button
    //             className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
    //             onClick={() => handleItemClick("schedule")}
    //           >
    //             Schedule
    //           </button>
    //         </li>

    //         <li className="nav-li">
    //           <button
    //             className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
    //             onClick={() => handleItemClick("gallery")}
    //           >
    //             Gallery
    //           </button>
    //         </li>

    //         <li className="nav-li">
    //           <button
    //             className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
    //             onClick={() => handleItemClick("sponsors")}
    //           >
    //             Sponsors
    //           </button>
    //         </li>

    //         <li className="nav-li">
    //           <button
    //             className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
    //             onClick={() => handleItemClick("faqs")}
    //           >
    //             FAQs
    //           </button>
    //         </li>

    //         <li className="nav-li">
    //           <button
    //             className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] focus:text-[#B1F8F2] focus:underline"
    //             onClick={() => handleItemClick("contact")}
    //           >
    //             Contact
    //           </button>
    //         </li>
    //       </ul>
    //   </nav>
    // </div>

  <nav className="fixed top-0 left-0 right-0 bg-[#28143a] bg-opacity-80 flex justify-between items-center z-10 px-5 py-1 lg:py-1 h-8.2 lg:h-18 md:h-17">
    <div class="flex flex-wrap items-center justify-center mx-auto p-2">
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
          <li>
            <button onClick={() => handleItemClick("landing")} className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline" aria-current="page">Home</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("about")} className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">About</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("events")} className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Events</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("schedule")} className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Schedule</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("gallery")} className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Gallery</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("sponsors")} className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Sponsors</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("faqs")} className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Faq's</button>
          </li>
          <li>
            <button onClick={() => handleItemClick("contact")} className="text-[#F4D9D9] text-2xl font-bold cursor-pointer hover:text-[#B1F8F2] hover:underline focus:text-[#B1F8F2] focus:underline">Contact</button>
          </li>
        </ul>
      </div>
  </div>
</nav>
  );
};
// block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500

export default Navbar;
