import React, { useState } from 'react';
import axios from 'axios';
const MassMail = () => {
    const [inputs,setInputs] =useState({})
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(inputs);
        axios.post("https://catalysis2-0-backend.onrender.com/api/v1/sendMassMail",inputs)
        .then((res)=>console.log("The mail was sent successfully"))
        .catch((error)=>console.log(error))

    }
    const handleChange=(event)=>{
        const name=event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }
  return (
    <div >
        <div className='pt-24 flex flex-col items-center justify-center gap-6' >
            <div>
                <p className='text-4xl'>Mass Email</p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-4 flex-col w-full  items-center justify-center">
                <label className='text-lg'>Enter User Code</label>
                <input className='w-1/5 border-2 border-[black] rounded-md p-2' type="text" placeholder="" name="user" value={inputs.user || ""} onChange={handleChange}/> 
                <input className='w-2/3 border-2 border-[black] rounded-md p-2' type="text" placeholder="Subject" name="subject" value={inputs.subject || ""} onChange={handleChange}/>
                <input className='w-2/3 border-2 border-[black] rounded-md p-2' type="text" placeholder="Body" name="body" value={inputs.body || ""} onChange={handleChange} />
                <button
                    className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#D4DFC7] hover:text-black focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm"
                    onClick={handleSubmit}>Send
                </button>
            </form>
        </div>
    </div>
  )
}

export default MassMail