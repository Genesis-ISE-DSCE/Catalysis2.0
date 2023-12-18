import React, { useRef, useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import catalysis from '../assets/catalysis.png';

export default function ConfettiComp() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const timerId = useRef();
  const [startCount, setStartCount] = useState(false);

  const setCount = () => {
    setStartCount(true);
    setCountdown(5);
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);

      // Clear the interval when countdown reaches 0
      if (countdown === 0) {
        clearInterval(timerId.current);
        setIsConfettiActive(true);
      }
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timerId.current);
  }, [countdown]);

  return (
    <div className="confet flex flex-col items-center justify-center">
      <img
        src={catalysis}
        alt="Catalysis Logo"
        className="max-w-full h-auto mb-4 transform sm:scale-125 scale-100"
        style={{ marginBottom: '16px' }}
      />

      {startCount ? (
        countdown >= 0 ? (
          <h1 className="text-[#E26EE5] text-6xl font-bold mb-4 mt-10">{countdown}</h1>
        ) : (
          <>
            <h1 className="text-[#E26EE5] text-6xl font-bold mb-4 mt-10">Is Live!!</h1>
            <Confetti active={isConfettiActive} />
          </>
        )
      ) : (
        <button
          className="cbtn text-lg mt-10 sm:mt-10 px-6 py-3"
          onClick={setCount}
        >
          Start
        </button>
      )}
    </div>
  );
}
