import React from "react";
import "../App.css";
import catalysisImg from "../assets/catalysis.png";
import mascot3 from "../assets/mascot3.png";
import mascot3avif from "../assets/mascot3.avif";
import mascot3webp from "../assets/mascot3.webp";
import { Link } from "react-router-dom";


const Landing = () => {


  return (
    <div id="landing" className="lanbody h-screen">
      <div className="flex justify-center lg:pt-32 md:pt-16 items-center pt-72">
          <img fetchpriority = "high" src={catalysisImg} alt="Logo" className="lg:w-[60%] md:w-[60%] w-[90%]"/>       
      </div>
      <div className="lg:pr-[20%] md:pr-[20%] pr-0">
        <p className="text-[#8ac4e2] font-semibold lg:text-right lg:text-4xl md:text-right md:text-3xl text-center text-2xl">Technology at its peak!!</p>
      </div>
      <div className="pt-16">
        <p className="text-[#E5F2FF] font-semibold text-center lg:text-4xl md:text-3xl text-3xl">20<sup>th</sup> - 22<sup>nd</sup> December</p>
      </div>
      <Link to="/registration">
        <button className="tagline flex text-white text-4xl mx-auto">Register Now</button>
      </Link>
      <div className="mascot ">
        <picture height={481} width={424} alt="mascot" >
           <source type = "image/avif" srcSet={mascot3avif}/>
           <source type = "image/webp" srcSet={mascot3webp}/>
           <img src={mascot3} loading="lazy" alt="mascot"/>
        </picture>
      </div>
    </div>
  );
};

export default Landing;
