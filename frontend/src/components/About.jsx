const About = () => {
    return(
        <div class="bg-gradient-to-b from-[#081819] to-[#442F47] lg:py-12 lg:px-16 md:py-9 md:px-16 py-5 px-5">
        <div class="text-white text-5xl pb-10 font-bold justfiy-left">
            About
        </div>
        <div class="flex flex-col lg:flex-row justify-left">
            <div class="text-justify text-white text-xl lg:text-2xl w-full lg:w-[85%] py-5 px-2 lg:pr-10 leading-relaxed">
                Catalysis is an inter-department, extravagant 3-days tech fest, hosted by the ISE Department of Dayananda Sagar College of Engineering (DSCE), Bangalore. Catalysis aims to bring out the technical aspects in students by incorporating tech in various events going to be held through the whole of the fest. Through this event, we seek to help students demonstrate how technology integrates with other fields to help solve real-world problems and provide students with a platform to develop and showcase their tech skills.
            </div>
            <div class="flex justify-center lg:w-[15%] py-3 px-1">
                <img src="2.png" alt="Your Image" class="w-full h-auto object-cover"></img>
            </div>
        </div>
    </div>


    );
}

export default About;