
import { useState } from 'react'

const Faqs = () => {
    
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionData = [
        {
            title: 'When and where will the technical fest be held?',
            content: 'The technical fest will be held on the 23rd, 24th and 25th of January in the department of ISE.',
        },
        {
            title: 'What types of events and competitions will be held during the technical fest?',
            content: 'The technical fest will typically include various events, such as coding competitions, pitch-an-idea, debates, and speaker sessions on various technical topics.',
        },
        {
            title: 'Can non-IT branch students participate in the technical fest?',
            content: 'Yes, students of all departments are welcome to participate in the technical fest.',
        },
        {
            title: 'Will there be any prizes for the winners of the competitions?',
            content: 'Yes, there will be prizes for the winners of the various competitions and events held during the technical fest.',
        },
        {
            title: "How can I register for the technical fest?",
            content: "Registration for the technical fest will typically be done online on the official website or through a designated registration form."
        },
        
    ];

    const toggleAccordion = (index) => {
        if (activeAccordion === index) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(index);
        }
    };

    return (

        <div className="py-[4%] w-full" style={{backgroundColor: "#29153D"}} id='faq'>

            <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-12 mt-6" style={{color:'#E5F2FF'}}>Frequently Asked Questions</h1>

            {accordionData.map((item, index) => {
                return <div key={index} className="mb-4">

                <div className="p-2 rounded-md text-white shadow-md bg-[#72598A] w-3/4 mx-[13%] my-2">
                    <button
                        className="w-full text-left p-4"
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="flex items-center">
                            <div className="text-lg font-medium">
                                {item.title}
                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transform ${activeAccordion === index ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>
                    <div className={`${activeAccordion === index ? "block" : "hidden"} p-4`}>
                        {item.content}
                    </div>
                </div>
            </div>
        
            })}

        </div>
    
    );
}

export default Faqs
