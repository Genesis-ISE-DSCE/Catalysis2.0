<<<<<<< HEAD
import React from "react";
import "../App.css"
import catalysisImg from '../assets/catalysis.png';
// import mascot from '../images/mascot.png';
import mascot3 from '../assets/mascot3.png';

// import border from '../images/Catalysis Border.png';



const Landing = () => {
    return (
        <>
        <div className="logo">
        <div className="main">
            <div className="w-full h-auto max-w-screen-lg">
            <img src={catalysisImg} height={505} width={994} alt="Logo" className="logo-image " />
            </div>
            <span className="text max-w-screen-lg mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl">Technology at its Peak!</span>
            <br />
            <br />
            <br />
            <div className="">
            <p className="text2 max-w-screen-lg mx-auto text-lg sm:text-l md:text-2xl lg:text-3xl">23-25th November</p>
            </div>
            </div>
           
            <div className="mascot ">
                <img src={mascot3} height={481} width={424} alt="mascot" />
             </div>
        </div>
       
        </>
=======
const Landing = () => {
    return(
        <div>
            Landing
        </div>
>>>>>>> 8ddfa1eca38b0ea60cd09347cd515857900ab024
    );
}

export default Landing;