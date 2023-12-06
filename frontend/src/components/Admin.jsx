import React,{useState} from "react"
import '../index.css'
import Axios from "axios"
import {useNavigate} from "react-router-dom"

function Admin() {
    const [credentials,setCredentials] =useState({});
    const [authenticated,setAuthenicated] =useState(false);
    const [isLoggedIn,setIsLoggedIn]=useState(true)
    const navigate=useNavigate()

    const handleChange=(event)=>{
        event.preventDefault();
        const name =event.target.name;
        const value = event.target.value;
        setCredentials((values)=>({...values,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(credentials)
        //     // Axios.get("https://hackmanv6.onrender.com/api/v1/registration")

        Axios.post("https://hackmanv6.onrender.com/api/v1/login",credentials)
        .then(
            (res)=>{
                setIsLoggedIn(true)
             console.log(res.data.token)
            sessionStorage.setItem('token', JSON.stringify(res.data.token));

             console.log("dinesh")
             navigate("/participants-list",{state:authenticated})

            }
        
        )
        // .then((res)=>{
        //     // sessionStorage.setItem('token', JSON.stringify(res.token));
        //     // console.log( JSON.stringify(res.data.token))
        //     // console.log(isLoggedIn)
        // })
        .catch((err)=>console.log(err))
    }

    return (
        <div className="login-page h-screen w-screen">

            {/* background image */}
            <a href="/"><img src={require('../assets/catalysis.png')} alt="Logo" className="fixed top-3 px-5 py-1 h-6 lg:top-2.5 lg:h-9 lg:py-1 md:h-9 md:py-1 ml-1" /></a>

            {/* Center block containing eva and login */}
            <div className="flex items-center justify-center h-screen w-screen">
                
                {/* Lefgt side image of Eva */}
                <img src={require('../assets/mascot3.png')} alt="Eva" className="hidden lg:block bg-[#252736] w-2/5 h-4/5" />

                {/* Form elements on the right side */}
                <form
                onSubmit={handleSubmit}
                className="bg-[#27273F] lg:w-2/5 lg:h-4/5 md:w-3/5 md:h-3/5 w-3/4 h-3/5">

                    <div className="flex flex-col items-center justify-center mt-100 mb-100 lg:mt-100 lg:mb-100 md:mt-100 md:mb-100 h-4/5 md:h-4/5 lg:h-4/5">
                        <div className="lg:text-xl lg:pt-2 md:text-xl md:pt-2 text-base text-center text-[#22C3FF] pt-2  font-poppins font-semibold">WELCOME ADMIN!</div>
                        <div className="lg:text-sm lg:pt-0 md:text-sm md:pt-0 text-xs text-center text-[#22C3FF] pt-0 pb-5 font-poppins font-semibold">Login to your account</div>

                        <input className="lg:pb-3 mb-2 mt-8 lg:w-2/4 md:w-3/4 w-5/6 rounded-xl bg-[#23354E] appearance-none border-2 border-[#20354E] focus:text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500 text-white" id="inline-name" type="text" placeholder="Username" name="email" value={credentials.email || ""} onChange={handleChange}></input>
                        <input className="lg:pb-3 mb-2 mt-2 lg:w-2/4 md:w-3/4 w-5/6 rounded-xl bg-[#23354E] appearance-none border-2 border-[#20354E] focus:text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500 text-white" id="inline-name" type="text" placeholder="Password" name="password" value={credentials.password ||""} onChange={handleChange}></input>
                        
                        <button className="mt-8 lg:text-xl md:text-xl text-sm shadow bg-[#22C3FF] text-black font-bold py-1 px-2 rounded-lg hover:bg-[#D4DFC7] hover:text-[#071E22] focus:shadow-outline focus:outline-none" type="submit">
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Admin;