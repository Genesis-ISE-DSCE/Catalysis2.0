import React, { useEffect, useState } from 'react';
import Axios from 'axios';


const RegisterationList = () => {
  const[registrationdata, setregistation] = useState([]);
  const[selectedevent, setselectedevent] = useState([]);
  const [secretCode, setSecretCode] = useState('');

  const getprop = (enteredCode) => {
    const config = {
      headers: {
        Authorization: enteredCode,
      },
    };

    Axios.get('https://catalysis20-backend.up.railway.app/api/v1/getAllRegistrations', config)
      .then((response) => {
        const data = response.data;
        setregistation(data.registrations);
      })
      .catch((error) => {
        console.error('Error in fetching registration form', error);
      });
  };

  useEffect(() => {
    if (secretCode) {
      setregistation([]);
      getprop(secretCode);
    }
  }, [secretCode, selectedevent]);

  const filteredData = selectedevent
  ? registrationdata.filter((registration)=> registration.event === selectedevent)
  :registrationdata

  const handleEventChange = (e)=>{
    setselectedevent(e.target.value);
  }

  const handleSecretCodeChange = (e) => {
    setSecretCode(e.target.value);
  };

  return (
    <div className='pt-28'>
      <h1 className='text-center text-4xl'>Registrations</h1>
      <div className='mb-4 px-[30%] pb-12 pt-12'>
      <label className="block text-lg font-bold mb-2 text-center" htmlFor="secretCode">
          Enter Secret Code:
        </label>
        <input
          type="password"
          className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="secretCode"
          name="secretCode"
          value={secretCode}
          onChange={handleSecretCodeChange}
        />
          <label className='block text-lg font-bold mb-2' htmlFor='eventFilter'>
            Filter by Event:
          </label>
          <select
            className='shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='eventFilter'
            name='eventFilter'
            value={selectedevent}
            onChange={handleEventChange}
          >
            <option value=''>All Events</option>
            <option value='PromptDesigner'>Prompt Designer</option>
            <option value='TechnicalQuiz'>Technical Quiz (Team Event)</option>
            <option value='DSASmackDown'>DSASmackDown</option>
            <option value="Technoseek">Techno-Seek</option>
            <option value="UI/UXDesign">UI/UXDesign</option>
            <option value="CodingRelayRace">Coding Relay Race</option>
            <option value="LectureSeries(Workshop)">Lecture Series Workshop</option>
            <option value="CodeRed">Code Red</option>
          </select>
        </div>
      <div className='flex justify-center items-center'>
        <table className='border-collapse border border-gray-800 text-center'>
          <thead>
            <tr>
              <th className='border-collapse border border-gray-800'>Serial No.</th>
              <th className='border-collapse border border-gray-800'>Name</th>
              <th className='border-collapse border border-gray-800'>Email</th>
              <th className='border-collapse border border-gray-800' >Phone</th>
              <th className='border-collapse border border-gray-800'>Event</th>
              <th className='border-collapse border border-gray-800'>Semester</th>
              <th className='border-collapse border border-gray-800'>Branch</th>
              <th className='border-collapse border border-gray-800'>USN</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((registration,index) => (
              <tr key={registration.id}>
                <td className='border-collapse border border-gray-800'>{index+1}</td>
                <td className='border-collapse border border-gray-800'>{registration.name}</td>
                <td className='border-collapse border border-gray-800'>{registration.email}</td>
                <td className='border-collapse border border-gray-800'>{registration.phone}</td>
                <td className='border-collapse border border-gray-800'>{registration.event}</td>
                <td className='border-collapse border border-gray-800'>{registration.semester}</td>
                <td className='border-collapse border border-gray-800'>{registration.branch}</td>
                <td className='border-collapse border border-gray-800'>{registration.usn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RegisterationList;