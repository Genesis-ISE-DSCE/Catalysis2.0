import React, { useState } from 'react';
import axios from 'axios';
import bgImage from "../assets/registration-bg.avif";

const MassMail = () => {
    const [inputs,setInputs] = useState({});
    
    const events = [
        "PromptDesigner",
        "TechnicalQuiz",
        "LectureSeries(Workshop)",
        "DSASmackDown",
        "UI/UXDesign",
        "CodeRed",
        "Technoseek",
        "CodingRelayRace",
        "All"
    ];

    const attachmentDocs = [
        "PromptDesigner-Rulebook",
        "TechnicalQuiz-Rulebook",
        "LectureSeries(Workshop)-Rulebook",
        "DSASmackDown-Rulebook",
        "UI/UXDesign-Rulebook",
        "CodeRed-Rulebook",
        "Technoseek-Rulebook",
        "CodingRelayRace-Rulebook",
        "Terms&Conditions",
        "CodeOfConduct"
    ];

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(inputs);
        // http://localhost:5000/api/v1/register 
        // https://catalysis2-0-backend.onrender.com
        // http://13.235.9.178:5000/api/v1/register
        
        axios.post("http://localhost:5000/api/v1/register", inputs)
        .then((res)=>console.log("The mail was sent successfully"))
        .catch((error)=>console.log(error))
    }

    const handleChange=(event)=>{
        const name=event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const bgImageStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundsize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        height: '100vh',
    };

    return (
        <div id="massmail" style={bgImageStyle}>
            <div className='pt-56 flex flex-col items-center justify-center gap-6' >
                <div>
                    <p className='text-4xl text-white'>Mass Email</p>
                </div>
                <form onSubmit={handleSubmit} className="flex gap-4 flex-col w-full  items-center justify-center">
                    <label className='text-lg text-white'>Enter User Code</label>
                    <input className='w-1/5 border-2 border-[black] rounded-md p-2' type="text" placeholder="" name="user" value={inputs.user || ""} onChange={handleChange}/> 
                    <label className='text-lg text-white'>Select Event</label>
                    <select className='w-1/5 border-2 border-[black] rounded-md p-2' name="event" value={inputs.event || ""} onChange={handleChange}>
                        <option value="">Select an Event</option>
                        {events.map((event) => (
                            <option key={event} value={event}>
                                {event}
                            </option>
                        ))}
                    </select>
                    <input className='w-2/3 border-2 border-[black] rounded-md p-2' type="text" placeholder="Subject" name="subject" value={inputs.subject || ""} onChange={handleChange}/>
                    <input className='w-2/3 border-2 border-[black] rounded-md p-2' type="text" placeholder="Body" name="body" value={inputs.body || ""} onChange={handleChange} />
                    <label className='text-lg text-white'>Select Attachment</label>
                    <select className='w-1/5 border-2 border-[black] rounded-md p-2' name="attachmentDocs" value={inputs.attachmentDocs || ""} onChange={handleChange}>
                        <option value="">Select attachments</option>
                        {attachmentDocs.map((attachmentDocs) => (
                            <option key={attachmentDocs} value={attachmentDocs}>
                                {attachmentDocs}
                            </option>
                        ))}
                    </select>
                    <div className='pb-8'>
                        <button
                            className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#D4DFC7] hover:text-black focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm"
                            onClick={handleSubmit}>Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MassMail