import React from 'react'

const Schedule = () => {
  return (
    <div id='schedule' className='bg-gradient-to-b from  from-[#29153D] to-[#000000]  lg:max-w-full lg:py-9 lg:px-16 md:py-9 md:px-16 py-5 px-5'>
        
        <div className='text-[#E5F2FF] lg:font-bold lg:text-center lg:text-5xl lg:p-10 md:font-bold md:text-center md:text-5xl md:p-5 font-bold text-center text-5xl p-5 '>Schedule</div>
            <table className="border-collapse border border-slate-500 text-[#E5F2FF] mx-auto border-spacing-9 font-Inter ">
                <thead>
                    <tr>
                    <th className="border-4 border-[#93a3eb] lg:text-3xl lg:w-[220px] p-3 border-[#558289] bg-[#442F47] text-white text-center">Date</th>
                    <th className="border-4 border-[#93a3eb] lg:text-3xl lg:w-[320px] p-3 border-[#558289] bg-[#442F47] text-white text-center">Event</th>
                    <th className="border-4 border-[#93a3eb] lg:text-3xl lg:w-[240px] p-3 border-[#558289] bg-[#442F47] text-white text-center">Time</th>
                    <th className="border-4 border-[#93a3eb] lg:text-3xl lg:w-[360px] p-3 border-[#558289] bg-[#442F47] text-white text-center">Venue</th>
                    </tr>
                </thead>
                <tbody className='text-center lg:text-2xl lg:font-light '>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">23-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Inaugration</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white ">09:30-11:00</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">AV Auditorium</td>
                    </tr>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">23-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Air Crash</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">14:00-17:00</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Amphitheatre</td>
                    </tr>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">23-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Quizz Up</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">11:00-16:00</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">#009 and #205 (ISE Dept)</td>
                    </tr>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">23-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Coding JAM</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">14:00-17:00</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">All 4 Labs (ISE Dept)</td>
                    </tr>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">24-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">What's the Point?</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">11:00-14:00</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Amphitheatre</td>
                    </tr>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">24-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Innovator</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">14:00-17:00</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Amphitheatre</td>
                    </tr>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">24-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Call to Launch</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">10:00-13:00</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">#009 and #205 (ISE Dept)</td>
                    </tr>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">25-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Code Red</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">10:00-14:00</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Virtual Mode</td>
                    </tr>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">25-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Techno Seek</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">12:00-15:00</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">DSCE Campus</td>
                    </tr>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">25-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Prize Distribution</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">15:00-16:00</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">AV Auditorium</td>
                    </tr>
                    <tr>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">25-01-2022</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">Closing Ceremony</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">16:00-16:30</td>
                    <td className="border-4 border-[#93a3eb] p-2 border-[#558289] bg-[#442F47] text-white">AV Auditorium</td>
                    </tr>
                </tbody>
            </table>
        
    </div>
  )
}

export default Schedule