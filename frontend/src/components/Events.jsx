import styles from './styles/events.module.css';

const events = [
    {
        img: require('../assets/lecture.png'),
        heading: 'Lecture Series',
        content: 'A series of informative sessions or workshops covering various technical or educational topics. ',
        rules: ''
    },
    {
        img: require('../assets/dsa.png'),
        heading: 'DSA SmackDown',
        content: 'A competition focused on Data Structures and Algorithms where participants compete to solve challenging problems.',
        rules: ''
    },
    {
        img: require('../assets/promptdesigner.png'),
        heading: 'Prompt Designer',
        content: 'A competition where participants showcase their creative design skills and prompting skills by creating the best design using AI.',
        rules: ''
    },
    {
        img: require('../assets/technoseek.png'),
        heading: 'Technoseek',
        content: 'An event inspired from Cicada3301, which integrates treasure hunt and CTF.',
        rules: ''
    },
    {
        img:require('../assets/valorant.png'),
        heading:'CodeRED',
        content:'A high-intensity Valorant gaming tournament .',
        rules:''
    },
    {
        img:require('../assets/relay.png'),
        heading:'Coding Relay Race',
        content:'A team-based coding competition were participants take turns to solve coding challenges, passing the baton of  work from one team member to the next in a relay fashion.',
        rules:''
    },
    {
        img:require('../assets/uiux.png'),
        heading:'UI/UX Design',
        content:'An event that explores UI and user experience design, allowing participants to create user-friendly digital interfaces',
        rules:''
    },
    {
        img:require('../assets/technicalquiz.png'),
        heading:'Technical Quiz',
        content:'An event that tests participant’s knowledge of technical topics through a series of questions and answers.',
        rules:''
    }
]
const Events = () => {
    return (
        <div id='events' className={` ${styles['events-background']} min-h-screen block`} >
            <h1 className="font-bold text-[#E5F2FF] mb-8  py-[70px] text-center w-full leading-normal text-4xl md:text-4xl lg:text-5xl -tracking-normal">Events</h1>
            <div className='flex justify-center  flex-wrap w-full'>
                <div className="text-white font-inter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-10">
                    {
                        events.map((element, key) => {
                            return (
                                <div className={` ${styles['events-card']} ${styles['card-shadow-effect']} rounded-lg  mb-24 relative w-[272px] min-h-[356px]`}>
                                    <div className='absolute flex w-full -top-24 justify-center'>
                                        <img loading="lazy" width={'183px'} alt={`img${key}`} className={`block left-[56px] ${styles['img-shadow-effect']} rounded-full `} src={element.img} />
                                    </div>

                                    <h1 className={`${styles['hover-underline-animation']} mx-4 mt-24 font-extrabold leading-normal text-xl`}>{element.heading}</h1>
                                    <p className='px-4 mt-[11px] text-justify  text-[15px]'>
                                        {element.content}
                                    </p>
                                    <div className='absolute bottom-3 w-full flex justify-center'>
                                        <button className=' rounded-[15px] text-xl w-[223px] h-[50px] bg-[#081819] hover:bg-slate-800 text-white border hover:border-slate-200 px-4 py-2'>
                                            RULEBOOK
                                        </button>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Events;