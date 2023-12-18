import React, {useRef,useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
import catalysis from "../assets/catalysis.png";
export default function ConfettiComp() {
  const navigate = useNavigate();
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [countdown,setCountdown]=useState(5)
  const timerId=useRef()
  const [startCount,setstartCount]=useState(false);

  function setCount()
  {
    setstartCount(true);
    setCountdown(5);

  }

 
  const handleButtonClick = () => {
    setIsConfettiActive(true);
    navigate("/");
  };

  useEffect(() => {
    if (isConfettiActive) {
      const timeoutId = setTimeout(() => {
        setIsConfettiActive(false);
      }, 1000);

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

  
  useEffect(() => {
    timerId.current=setInterval(() => {

        
         setCountdown(prev=>{
        return prev-1/2
        
      
        })
        }, 1000)
  
        
        
          return ()=> clearInterval(timerId)
  },[]) 
  
  

  if(startCount===true){
   
    
    if(countdown>=0){
  return (

  
    <div className="confet flex flex-col items-center justify-center">
      <img
        src={catalysis}
        alt="Catalysis Logo"
        className="max-w-full h-auto mb-4 transform sm:scale-125 scale-100"
      />
      <h1 class="text-[#E26EE5] text-5xl">{""+countdown}</h1>
    </div>
  );
    }

    else{
      return (
        <div className="confet flex flex-col items-center justify-center">
          <img
            src={catalysis}
            alt="Catalysis Logo"
            className="max-w-full h-auto mb-4 transform sm:scale-125 scale-100"
          />
          <h1 class="text-[#E26EE5] text-5xl bold">IsLive</h1>
          <Confetti active={isConfettiActive} config={confettiConfig} />

        </div>
      );
    }
  }
 else{
  return (
    <div className="confet flex flex-col items-center justify-center">
      <img
        src={catalysis}
        alt="Catalysis Logo"
        className="max-w-full h-auto mb-4 transform sm:scale-125 scale-100"
      />
      <button className='cbtn text-sm mt-3 sm:mt-5' onClick={setCount}>Start</button>
    </div>
  );
 }
}
