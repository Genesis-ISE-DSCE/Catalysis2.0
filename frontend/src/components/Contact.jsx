import React from "react";
import bgPattern from '../assets/bgpattern.jpg';
import instaLogo from "../assets/instagramlogo.png";
import linkedInLogo from "../assets/linkedinlogo.png";
import mailLogo from "../assets/maillogo.png";
const coc = require("../assets/docs/COC - HACKMAN.cbf71a14409997d58003.pdf");


const Contact = () => {

    const bgImageStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(41,21,61,0.62), rgba(0,0,0,0.62)), url(${bgPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 'w-scren',
        position: 'relative'   
    };
    return(
        <div id="contact" className="bg-gradient-to-b from-[#29153D] to-[#000000] h-100 " style={bgImageStyle}  >
            <h1 className="font-bold text-[#E5F2FF] text-center text-4xl md:text-4xl lg:text-5xl pt-12">Contact</h1>
            <footer className= "text-center text-white pb-6">
                <div className="pt-9 flex justify-center mb-9">
                    <a href="https://instagram.com/genesis.ise" target="_blank" class="mr-9" rel="noreferrer">
                        <img src={instaLogo} alt="Logo" className = "h-14 pl-7"/>
                    </a>
                    <a href="https://www.linkedin.com/company/gensis-ise-dsce/" target="_blank"
                    class="mr-9" rel="noreferrer">
                        <img src={linkedInLogo} alt="Logo" className = "h-14"/>
                    </a>            
                    <a href="mailto:ise.genesis.dsce@gmail.com" target="_blank"
                    class="mr-9" rel="noreferrer">
                        <img src={mailLogo} alt="Logo" className = "h-14"/>
                    </a>
                </div>
                <div className ="text-center font-semibold py-2 text-[#ffffff]">Gagan: <a href="tel:9008243280">9008243280</a> | Tarana: <a href="tel:7483408791">7483408791</a></div>
                    <div></div>
                <div className ="text-center text-lg px-2 py-4 pb-5 text-[#ffffff] ">&#169; 2023 Catalysis2.0 | All rights reserved | <a href={coc} rel='noreferrer noopener' target="_blank" className="hover:text-purple-300">Code of Conduct</a></div>
            </footer>
            <div className="bg-[#1d1526] text-center font-semibold text-white p-2">Made by team <a href="https://www.instagram.com/genesis.ise/" rel='noreferrer noopener' target="_blank" className='text-purple-300'>Genesis</a> with ❤️</div>
        </div>
    );
}

export default Contact;