import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
import catalysis from "../assets/catalysis.png";
import { Link } from 'react-router-dom';

export default function Page() {
  const navigate = useNavigate();
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleButtonClick = () => {
    setIsConfettiActive(true);
    navigate("/");
  };

  useEffect(() => {
    if (isConfettiActive) {
      const timeoutId = setTimeout(() => {
        setIsConfettiActive(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isConfettiActive]);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    decay: 0.95,
  };

  return (
    <div className="confet flex flex-col items-center justify-center h-screen">
      
      <Link to="/confetti" className='cbtn text-sm mt-3 sm:mt-5' >Launch Website</Link>
     
    </div>
  );
}
