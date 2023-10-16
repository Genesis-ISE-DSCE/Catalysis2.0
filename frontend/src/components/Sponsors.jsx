import React from "react";
const radix = require('../assets/radix.png');
const hashit = require('../assets/hashitenary.jpg');
const breakPoint = require('../assets/breakPoint.jpg');
const wealthPoint = require('../assets/wealthPoint.jpg');


const Sponsors = () => {
    return(
        <div id = "Sponsors" className="bg-gradient-to-b from-[#29153D] to-[#000000]">
            <h1 className="font-bold text-[#E5F2FF] text-center text-4xl md:text-4xl lg:text-5xl pt-12 pb-8">Sponsors</h1>
            <div className="lg:flex pb-10 mx-6">
                <img src={radix} className="lg:w-1/4 lg:h-[200px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " rel="noreferrer" alt="Sponsor Logo"/> 

                <img src={hashit} className="lg:w-1/4 lg:h-[200px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" rel="noreferrer" alt="Sponsor Logo"/>   

                <img src={breakPoint} className="lg:w-1/4 lg:h-[200px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" rel="noreferrer" alt="Sponsor Logo"/> 

                <img src={wealthPoint} className="lg:w-1/4 lg:h-[200px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" rel="noreferrer" alt="Sponsor Logo"/> 
               
            </div>
        </div>
    );
}

export default Sponsors;