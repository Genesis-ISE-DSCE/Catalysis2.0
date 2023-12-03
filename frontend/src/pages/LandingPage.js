import React, { Suspense } from 'react';
const About = React.lazy(()=>import('../components/About'));
const Contact = React.lazy(()=>import('../components/Contact'));
const Events = React.lazy(()=>import('../components/Events'));
const Faqs = React.lazy(()=>import('../components/Faqs'));
const Gallery = React.lazy(()=>import('../components/Gallery'));
const Landing = React.lazy(()=>import('../components/Landing'));
// const Navbar = React.lazy(()=>import('../components/Navbar'));
// const Schedule = React.lazy(()=>import('../components/Schedule'));
const Sponsors = React.lazy(()=>import('../components/Sponsors'));

const LandingPage = () => {
    return (
        <div>
            <Suspense>
                <Landing />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <About />   
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Events />
            </Suspense>

            {/* <Suspense fallback={<div>Loading...</div>}>
                <Schedule />
            </Suspense> */}

            <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Sponsors />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Faqs />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Contact />
            </Suspense>    

            {/* <Suspense fallback={<div>Loading...</div>}>
                <Registrations />
            </Suspense>     */}
                   
        </div>
    );
};

export default LandingPage;