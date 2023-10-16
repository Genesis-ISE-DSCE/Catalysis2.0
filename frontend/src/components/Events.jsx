import styles from './styles/events.module.css';

const events = [
    {
        img: require('../assets/valorant.png'),
        heading: 'Code Red',
        content: 'A global competitive e-sports tournament series for the video game Valorant.',
        rules: ''
    },
    {
        img: require('../assets/codeJam.png'),
        heading: 'Coding Jam',
        content: 'Coding contest in which participants solve algorithmic problems using a programming language, with the goal of achieving the highest performance.',
        rules: ''
    },
    {
        img: require('../assets/whatsThePoint.png'),
        heading: 'What’s the Point?',
        content: 'A competition in which teams of students discuss a subject, and the team that makes the best arguments wins.',
        rules: ''
    },
    {
        img: require('../assets/innovator.png'),
        heading: 'Innovator',
        content: 'Similar to Just a Minute (JAM). Students will be given two technologies and they will be asked to suggest possible real-life applications using both the technologies.',
        rules: ''
    },
    {
        img:require('../assets/callToLaunch.png'),
        heading:'Call to Launch',
        content:'A contest where participants present their entrepreneurial skills, and business concepts to a panel in the hope of winning investment capital.',
        rules:''
    },
    {
        img:require('../assets/airCrash.png'),
        heading:'Air Crash',
        content:'An event where participants represent famous people of the tech industry and convincingly persuade the judges that they are the most imperative in business and deserving of a parachute.',
        rules:''
    },
    {
        img:require('../assets/TechnoSeek.png'),
        heading:'TechnoSeek',
        content:'Inspired by Cicada 3301, TechnoSeek is a technical treasure hunt and has elements of a life-size CTF.',
        rules:''
    },
    {
        img:require('../assets/quizUp.png'),
        heading:'Quiz-Up',
        content:'A contest in which a team of participants tests what they know by answering questions on the topics.',
        rules:''
    }
]
const Events = () => {
    return (
        <div className={` ${styles['events-background']} min-h-screen block`} >
            <h1 className="font-bold text-[#E5F2FF] mb-8  py-[70px] text-center w-full leading-normal text-4xl md:text-4xl lg:text-5xl -tracking-normal">Events</h1>
            <div className='flex justify-center  flex-wrap w-full'>
                <div className="text-white font-inter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-10">
                    {
                        events.map((element, key) => {
                            return (
                                <div className={` ${styles['events-card']} ${styles['card-shadow-effect']} rounded-lg  mb-24 relative w-[272px] min-h-[356px]`}>
                                    <div className='absolute flex w-full -top-24 justify-center'>
                                        <img width={'183px'} alt={`img${key}`} className={`block left-[56px] ${styles['img-shadow-effect']} rounded-full `} src={element.img} />
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