// import { useState } from 'react'

// const Faqs = () => {

//     const [activeAccordion, setActiveAccordion] = useState(null);

//     const accordionData = [
//         {
//             title: 'What is Catalysis2.0?',
//             content: 'Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.'
//         },
//         {
//             title: 'When and where will the technical fest be held?',
//             content: 'The technical fest will be held from the 18th to the 20th of December in the department of ISE.',
//         },
//         {
//             title: 'What types of events and competitions will be held during the technical fest?',
//             content: 'The technical fest will typically include various events, such as coding competitions, technoseek, gaming and speaker sessions on various technical topics.',
//         },
//         {
//             title: 'Can non-IT branch students participate in the technical fest?',
//             content: 'Yes, students of all departments of DSCE are welcome to participate in the technical fest.',
//         },
//         {
//             title: 'Will there be any prizes for the winners of the competitions?',
//             content: 'Yes, there will be prizes for the winners of the various competitions and events held during the technical fest.',
//         },
//         {
//             title: "How can I register for the technical fest?",
//             content: "Registration for the technical fest will typically be done online on the official website or through a designated registration form."
//         },

//     ];

//     const toggleAccordion = (index) => {
//         if (activeAccordion === index) {
//             setActiveAccordion(null);
//         } else {
//             setActiveAccordion(index);
//         }
//     };

//     return (
//         <div id='faqs' className="py-16 w-full" style={{backgroundColor: "#29153D"}}>
//             <h1 className="font-bold text-[#E5F2FF] text-center text-4xl md:text-4xl lg:text-5xl mb-12">FAQ'S</h1>
//             {accordionData.map((item, index) => {
//                 return <div key={index} className="mb-4">
//                 <div className="rounded-md text-white shadow-md bg-[#72598A] w-3/4 mx-[13%] my-2">
//                     <button
//                         className="w-full text-left p-4"
//                         onClick={() => toggleAccordion(index)}
//                     >
//                         <div className="flex items-center">
//                             <div className="text-lg font-semibold">
//                                 {item.title}
//                             </div>
//                             <div className="ml-auto">
//                                 <svg
//                                     className={`h-6 w-6 transform ${activeAccordion === index ? "rotate-180" : ""}`}
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M19 9l-7 7-7-7"
//                                     />
//                                 </svg>
//                             </div>
//                         </div>
//                     </button>
//                     <div className={`${activeAccordion === index ? "block" : "hidden"} p-4 text-white bg-[#604b74] rounded-md`}>
//                         {item.content}
//                     </div>
//                 </div>
//             </div>

//             })}

//         </div>

//     );
// }
import { useState } from "react";
import "./styles/Faqs.css";

const Faqs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionData = [
    {
      title: "What is Catalysis2.0? ",
      content:
        "Catalysis is a 3-day interdepartmental technical fest organised by team Genesis of the Department of Information Science and Engineering.",
    },
    {
      title: "When and where will the technical fest be held?",
      content:
        "The technical fest will be held from the 18th to the 20th of December in the department of ISE.",
    },
    {
      title:
        "What types of events and competitions will be held during the technical fest?",
      content:
        "The technical fest will typically include various events, such as coding competitions, technoseek, gaming and speaker sessions on various technical topics.",
    },
    {
      title: "Can non-IT branch students participate in the technical fest?",
      content:
        "Yes, students of all departments of DSCE are welcome to participate in the technical fest.",
    },
    {
      title: "Will there be any prizes for the winners of the competitions?",
      content:
        "Yes, there will be prizes for the winners of the various competitions and events held during the technical fest.",
    },
    {
      title: "How can I register for the technical fest?",
      content:
        "Registration for the technical fest will be done online on the official website.",
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
    <div
      id="faqs"
      className="py-16 w-full"
      style={{ backgroundColor: "#29153D" }}
    >
      <h1 className="font-bold text-[#E5F2FF] text-center text-4xl md:text-4xl lg:text-5xl mb-12">
        FAQ'S
      </h1>
      {accordionData.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className={`rounded-md text-white shadow-md bg-[#72598A] w-3/4 mx-[13%] my-2 accordion-item  ${
              activeAccordion === index ? "open" : ""
            }`}
          >
            <button
              className="w-full text-left p-4"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center">
                <div className="text-lg font-semibold tittle">{item.title}</div>
                <div className="ml-auto">
                  <svg
                    className={`h-6 w-6 transform ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
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
            <div
              className={`accordion-content ${
                activeAccordion === index ? "open" : ""
              }`}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
