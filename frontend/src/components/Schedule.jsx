import React from "react";
import { Carousel } from 'flowbite-react';
import Event1 from "../assets/Day1.png";
import Event2 from "../assets/Day2.png";
import Event3 from "../assets/Day3.png";

const Schedule = () => {

  return (
    <>

      <div id="schedule" className="bg-gradient-to-b from-[#29153D] to-[#000000] pb-10 pt-7" >
        <div className="h-screen">
          <h1 className="font-bold text-[#E5F2FF] text-center text-4xl pt-5 md:text-4xl lg:text-5xl">
            Schedule
          </h1>
          <Carousel slide={true} className="carousel-style" >
            <img src={Event1} alt="day1" className="h-3/4 2xl:w-1/2 sm:w-1/2 2xl:h-auto pb-10 sm:mt-10" />
            <img src={Event2} alt="day2" className="h-3/4 2xl:w-1/2 2xl:h-auto sm:mt-4" />
            <img src={Event3} alt="day3" className="h-3/4 2xl:w-1/2 2xl:h-auto sm:mt-2" />
          </Carousel>
          <style jsx>{`
        .carousel-style {
          margin-top: -4rem;
        }

        @media (max-width: 768px) {
          .carousel-style {
            margin-top: -8rem;
          }

          .carousel-style img {
            margin-bottom: 0px; 
          }
        }
      `}</style>

        </div>
      </div>
    </>
  );
};

export default Schedule;