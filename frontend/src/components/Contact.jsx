import React from "react";
import bgPattern from './bgpattern.jpg'
const Contact = () => {

    const bgImageStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(41,21,61,0.62), rgba(0,0,0,0.62)), url(${bgPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 'w-scren',
        position: 'relative'   
    };
    return(
            <div id="Contact" className="bg-gradient-to-b from-[#29153D] to-[#000000] h-100 " style={bgImageStyle}  >
                <div className="font-inter text-white text-center text-5xl font-bold mx-auto pt-12">
                    Contact Us
                </div>
                <footer className= "text-center text-white">
                    <div className="pt-9 flex justify-center mb-9">
                        <a href="https://instagram.com/genesis.ise" target="_blank" class="mr-9" rel="noreferrer">
                            <img src="instagramlogo.png" alt="Logo" className = "h-14 pl-7"/>
                        </a>
                        <a href="https://www.linkedin.com/company/gensis-ise-dsce/" target="_blank"
                        class="mr-9" rel="noreferrer">
                            <img src="linkedinlogo.png" alt="Logo" className = "h-14"/>
                        </a>            
                        <a href="mailto:ise.genesis.dsce@gmail.com" target="_blank"
                        class="mr-9" rel="noreferrer">
                            <img src="maillogo.png" alt="Logo" className = "h-14"/>
                        </a>
                    </div>
                    <div className ="text-center py-2
                     text-[#ffffff]">70906 88613 | 73384 98081</div>
                    <div className ="text-center py-4 pb-5 text-[#ffffff] ">Copyright @ 2023 All rights reserved | Made by genesis team.</div>
                </footer>
            </div>
    );
}

export default Contact;