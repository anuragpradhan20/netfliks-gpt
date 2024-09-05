import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
const  Login=()=>{
    const[isSigninForm,setSignInForm]=useState(true);
    const toggleSigninForm=()=>{
        setSignInForm(!isSigninForm);
    }
    return(
        <div className="relative">
        <div className="overflow-hidden w-full">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg" alt="background-image" className="w-full object-cover scale-110 brightness-50"></img>
        </div>
        <Header/>
        <form className="w-[400px] absolute left-1/2 top-[12%] transform -translate-x-1/2 bg-black bg-opacity-50 p-6 rounded-md">
             <h3 className="font-semibold text-[28px] mb-4 text-white ml-6">{isSigninForm===true?"Sign In":"Sign Up"}</h3>
             <div className="w-full flex flex-col justify-center items-center gap-3">
             {!isSigninForm && (<input type="text" placeholder="FullName" className="w-5/6   border border-gray-400 rounded-sm font-normal text-sm text-gray-300 bg-black bg-opacity-45 px-4 py-3"></input>)}
             <input type="text" placeholder="Email or mobile number" className="w-5/6   border border-gray-400 rounded-sm font-normal text-sm text-gray-300 bg-black bg-opacity-45 px-4 py-3"></input>
             <input type="password" placeholder="Password" className="w-5/6 border border-gray-400 rounded-sm font-normal text-sm text-gray-300 bg-black bg-opacity-45 px-4 py-3"></input>
             <button className="w-5/6 px-4 py-2 rounded-md bg-netflixRed text-white text-sm font-bold">{isSigninForm===true?"Sign in":"Sign up"}</button>
             {isSigninForm && (<p className="w-5/6 text-gray-300 text-center my-1">OR</p>)}
             {isSigninForm && (<button className="w-5/6 px-4 py-2 rounded-md bg-gray-500 bg-opacity-65 text-white text-sm font-bold">Use a  sign-in code</button>)}
             {isSigninForm && (<Link className="w-5/6 text-sm text-gray-100 text-center hover:underline">Forgot password?</Link>)}
             <p className="w-5/6 text-gray-100 text-sm my-1">{isSigninForm===true?"New to Netfliks? ":"Already a Customer? "}<Link className="text-sm font-semibold text-gray-100 hover:underline" onClick={toggleSigninForm}>{isSigninForm===true?"Sign up now.":"Sign in now"}</Link></p>
             </div>
           
        </form>
       </div>
    )
}
export default Login;