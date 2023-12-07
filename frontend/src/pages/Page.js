import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Page() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

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

  return (
    <div className="confet flex flex-col items-center justify-center h-screen">  
      <Link to="/confetti" className='cbtn text-sm mt-3 sm:mt-5'>Launch Website</Link>
    </div>
  );
}
