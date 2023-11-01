import image from "../assets/2.png";
import imageavif from "../assets/2.avif"
import imagewebp from "../assets/2.webp"

const About = () => {
    return(
        <div id="about" className="bg-gradient-to-b from-[#29153D] to-[#000000] lg:py-24 lg:px-40 md:py-9 md:px-16 py-5 px-5">
        <div className="font-bold text-[#E5F2FF] text-4xl md:text-4xl lg:text-5xl pt-12 pb-10 justfiy-left pl-2">
            About
        </div>
        
        <div className="flex flex-col lg:flex-row justify-left">
            
            <div className="text-justify text-white text-xl lg:text-2xl w-full lg:w-[85%] py-5 px-2 lg:pr-10 leading-relaxed">
                Catalysis is an inter-department, extravagant 3-day tech fest, hosted by the ISE Department of Dayananda Sagar College of Engineering (DSCE), Bangalore. Catalysis aims to bring out the technical aspects in students by incorporating tech in various events going to be held throughout the whole of the fest. Through this event, we seek to help students demonstrate how technology integrates with other fields to help solve real-world problems and provide students with a platform to develop and showcase their tech skills.
            </div>
            <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center md:w-1/2 md:flex md:items-center md:justify-center flex items-center">
                <picture className="lg:block lg:w-[75%] md:w-[50%] w-auto">
                    <source type="image/avif" srcSet={imageavif}/>
                    <source type="image/webp" srcSet={imagewebp}/>
                    <img src={image} loading="lazy" alt="Mascot" />
                </picture>
            </div>
        </div>
    </div>
    );
}

export default About;
