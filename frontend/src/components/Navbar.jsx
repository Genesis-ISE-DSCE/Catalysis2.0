<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => {

  const [navItem, setNavItem] = useState("");

  const handleItemClick = (item) => {
    setNavItem(item);
  };

  return (
    <div>
      <nav className="p-4" >
        <div className="container mx-auto flex justify-evenly items-center">
          <ul className="flex  space-x-6">
          <li className='nav-li'>
              <Link to="/"
                className={`text-2xl font-bold cursor-pointer ${navItem === 'home' ? 'text-custom-blue underline' : 'text-custom-pink'}`}
                onClick={() => handleItemClick('home')}
            
              >
                Home
              </Link>
            </li>

            <li className='nav-li'>
              <Link to="/about"
                className={`text-2xl font-bold cursor-pointer ${navItem === 'about' ? 'text-custom-blue underline' : 'text-custom-pink'}`}
                onClick={() => handleItemClick('about')}
                
              >
                About
              </Link>
            </li>

            <li className='nav-li'>
              <Link
                className={`text-2xl font-bold cursor-pointer ${navItem === 'events' ? 'text-custom-blue underline' : 'text-custom-pink'}`}
                onClick={() => handleItemClick('events')}
                to="/events"
              >
                Events
              </Link>
            </li>

            <li className='nav-li'>
              <Link
                className={`text-2xl font-bold cursor-pointer ${navItem === 'schedule' ? 'text-custom-blue underline' : 'text-custom-pink'}`}
                onClick={() => handleItemClick('schedule')}
                to="/schedule"
              >
                Schedule
              </Link>
            </li>

            <li className='nav-li'>
              <Link
                className={`text-2xl font-bold cursor-pointer ${navItem === 'sponsors' ? 'text-custom-blue underline' : 'text-custom-pink'}`}
                onClick={() => handleItemClick('sponsors')}
                to="/sponsors"
              >
                Sponsors
              </Link>
            </li>

            <li className='nav-li'>
              <Link
                className={`text-2xl font-bold cursor-pointer ${navItem === 'faqs' ? 'text-custom-blue underline' : 'text-custom-pink'}`}
                onClick={() => handleItemClick('faqs')}
                to="/faqs"
              >
                FAQs
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
=======
=======
>>>>>>> 8ddfa1eca38b0ea60cd09347cd515857900ab024
const Navbar = () => {
    return(
        <div>
            Navbar
        </div>
    );
}

<<<<<<< HEAD
export default Navbar;
>>>>>>> 8ddfa1eca38b0ea60cd09347cd515857900ab024
=======
export default Navbar;
>>>>>>> 8ddfa1eca38b0ea60cd09347cd515857900ab024
