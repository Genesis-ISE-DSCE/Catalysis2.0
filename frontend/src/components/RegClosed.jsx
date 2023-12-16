import bgImage from "../assets/registration-bg.avif";
import mascot3 from "../assets/mascot3.png";
import mascot3avif from "../assets/mascot3.avif";
import mascot3webp from "../assets/mascot3.webp";

function RegClosed() {
    const bgImageStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative'
      };
    return (
        <div className="bg-[#24263B] h-screen pt-12" style={bgImageStyle}>
            <div className="lg:text-6xl lg:pt-72 md:text-4xl md:pt-60 text-[#22C3FF] pt-48 text-center font-poppins font-bold text-2xl">REGISTRATIONS ARE CLOSED</div>
            <div className="lg:text-xl lg:pt-2 md:text-md md:pt-2 text-center text-[#ffffff] pt-2  font-poppins font-semibold">We'll see you next year!!</div>
            <div className="mascot ">
                <picture height={481} width={424} alt="mascot" >
                    <source type = "image/avif" srcSet={mascot3avif}/>
                    <source type = "image/webp" srcSet={mascot3webp}/>
                <img src={mascot3} loading="lazy" alt="mascot"/>
                </picture>
            </div> 
        </div>
    );
}

export default RegClosed;