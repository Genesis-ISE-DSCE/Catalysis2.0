import About from "../components/About";
import Contact from "../components/Contact";
import Events from "../components/Events";
import Faqs from "../components/Faqs";
import Gallery from "../components/Gallery";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Landing />
            <About />
            <Events />
            <Schedule />
            <Gallery />
            <Sponsors />
            <Faqs />
            <Contact />
        </div>
    );
};

export default LandingPage;