import styles from './styles/events.module.css';

const events = [
    {
        img: require('../assets/valorant.png'),
        heading: 'Prompt Designer',
        content: 'Experience esports excellence in our Valorant Championship, where elite teams compete for strategic supremacy and ultimate glory.',
        rules: ''
    },
    {
        img: require('../assets/codeJam.png'),
        heading: 'Technical Quiz',
        content: 'Elevate your intellect in our Technical Quiz, where minds collide in a battle of knowledge, testing prowess in the intricate realms of technology and innovation.',
        rules: ''
    },
    {
        img: require('../assets/whatsThePoint.png'),
        heading: 'Lecture Series',
        content: 'Dive into our Lecture Series, a knowledge-rich forum where experts illuminate diverse fields, fostering intellectual exploration and insights.',
        rules: ''
    },
    {
        img: require('../assets/innovator.png'),
        heading: 'DSA Smackdown',
        content: 'A rigorous test of algorithmic proficiency and problem-solving acumen, where participants navigate complex data structures and algorithms to showcase their computational finesse.',
        rules: ''
    },
    {
        img:require('../assets/callToLaunch.png'),
        heading:'UI/UX Design',
        content:'Enter the UI/UX Design Competition, where creativity meets functionality in a showcase of design brilliance and user-centric innovation.',
        rules:''
    },
    {
        img:require('../assets/airCrash.png'),
        heading:'CodeRed',
        content: 'Experience esports excellence in our Valorant Championship, where elite teams compete for strategic supremacy and ultimate glory.',
        rules:''
    },
    {
        img:require('../assets/TechnoSeek.png'),
        heading:'TechnoSeek',
        content:'Unleash your tech prowess in our Treasure Hunt—an exhilarating journey through cryptic challenges and hidden knowledge, where wit leads to victory.',
        rules:''
    },
    {
        img:require('../assets/quizUp.png'),
        heading:'Coding Relay Race',
        content:'',
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