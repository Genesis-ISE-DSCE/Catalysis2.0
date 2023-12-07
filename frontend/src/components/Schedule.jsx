import React from "react";
import { Carousel } from 'flowbite-react';
import Event1 from "../assets/Event1.png";
import Event2 from "../assets/Events2.png";
import Event3 from "../assets/Event3.png";

 const Schedule = () => {

  return (
      <>
      <div className="bg-gradient-to-b from-[#29153D] to-[#000000] pb-20 pt-7" >
      <div className="h-96 sm:h-120 xl:h-140 2xl:h-180">
      <h1 className="font-bold text-[#E5F2FF] text-center text-4xl md:text-4xl lg:text-5xl">
        Schedule
      </h1>
      <Carousel slide={false} className="mt-2">
        <img src={Event1} alt="day1" className="max-h-full 2xl:w-1/3 2xl:h-auto"/> 
        <img src={Event2} alt="day2" className="max-h-full 2xl:w-1/3 2xl:h-auto"/>
        <img src={Event3} alt="day3" className="max-h-full 2xl:w-1/3 2xl:h-auto"/>
      </Carousel>
    </div>
  </div>
  </>
  );
};

export default Schedule;