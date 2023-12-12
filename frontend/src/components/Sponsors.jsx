import React from "react";
// const radix = require('../assets/radix.png');
// const hashit = require('../assets/hashitenary.jpg');
// const breakPoint = require('../assets/breakPoint.jpg');
// const wealthPoint = require('../assets/wealthPoint.jpg');
// const smradix = require('../assets/smradix.png');
// const smhashit = require('../assets/smhashitenary.jpg');
// const smbreakPoint = require('../assets/smbreakPoint.jpg');
// const smwealthPoint = require('../assets/smwealthPoint.jpg');

const khoros = require('../assets/khorosWhite.png');
const alpha = require('../assets/alpha.jpeg')
const theLegacyCloset = require('../assets/theLegacyCloset.jpeg')
const smkhoros = require('../assets/smkhorosWhite.png');
const smalpha = require('../assets/smalpha.jpeg')
const smtheLegacyCloset = require('../assets/smtheLegacyCloset.jpeg')
const royalEnfield = require('../assets/royal-enfield.webp')
const codingNinjas = require('../assets/CN1.jpeg')


const Sponsors = () => {

    const sponsorSize = {
        height: "164px",
        width: "371px"
    }

    return (
        <div id="sponsors" className="bg-gradient-to-b from-[#29153D] to-[#000000]">
            <h1 className="font-bold text-[#E5F2FF] text-center text-4xl md:text-4xl lg:text-5xl pt-12 pb-8">Sponsors</h1>
            <div className="lg:flex lg:flex-wrap pb-10 mx-6">
                <img src={smkhoros} loading="lazy" className="lg:w-1/4 lg:h-[200px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " style={sponsorSize} rel="noreferrer" alt="Sponsor Logo" onLoad={(e) => {
                    e.target.src = khoros
                    e.target.removeAttribute("style");
                }} />

                <img src={royalEnfield} loading="lazy" className="lg:w-1/4 lg:h-[200px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " style={sponsorSize} rel="noreferrer" alt="Sponsor Logo" onLoad={(e) => {
                    e.target.src = royalEnfield
                    e.target.removeAttribute("style");
                }} />

                <img src={smtheLegacyCloset} loading="lazy" className="lg:w-1/4 lg:h-[200px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" style={sponsorSize} rel="noreferrer" alt="Sponsor Logo" onLoad={(e) => {
                        e.target.src = theLegacyCloset
                        e.target.removeAttribute("style");
                    }} />

                <img src={smalpha} loading="lazy" className="lg:w-1/4 lg:h-[200px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" style={sponsorSize} rel="noreferrer" alt="Sponsor Logo" onLoad={(e) => {
                        e.target.src = alpha
                        e.target.removeAttribute("style");
                    }} />

                <img src={codingNinjas} loading="lazy" className="lg:w-1/4 lg:h-[200px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " style={sponsorSize} rel="noreferrer" alt="Sponsor Logo" onLoad={(e) => {
                    e.target.src = codingNinjas
                    e.target.removeAttribute("style");
                }} />


                {/* <img src={smwealthPoint} loading="lazy" className="lg:w-1/4 lg:h-[200px] lg:flex-row lg:mb-9 md:flex-col md:h-[200px] md:mt-9 md:mx-auto mx-auto flex-col pb-9 px-5
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"  style = {sponsorSize} rel="noreferrer" alt="Sponsor Logo" onLoad={(e)=>{
                    e.target.src = wealthPoint
                    e.target.removeAttribute("style");
                }}/>  */}

            </div>
        </div>
    );
}

export default Sponsors;