import React from "react";
import "../App.css";
import catalysisImg from "../assets/catalysis.png";
import mascot3 from "../assets/mascot3.png";


const Landing = () => {
  return (
    <div id="landing" className="lanbody h-screen">
      <div className="flex justify-center lg:pt-32 md:pt-16 items-center pt-72">
        <img src={catalysisImg} alt="Logo" className="lg:w-[60%] md:w-[60%] w-[90%]" />
      </div>
      <div className="lg:pr-[20%] md:pr-[20%] pr-0">
        <p className="text-[#8ac4e2] font-semibold lg:text-right lg:text-4xl md:text-right md:text-3xl text-center text-2xl">Technology at its peak!!</p>
      </div>
      <div className="pt-16">
        <p className="text-[#E5F2FF] font-semibold text-center lg:text-5xl md:text-3xl text-3xl">23<sup>rd</sup> - 25<sup>th</sup> November</p>
      </div>
      <div className="mascot ">
        <img src={mascot3} height={481} width={424} alt="mascot" />
      </div>
    </div>
  );
};

export default Landing;
