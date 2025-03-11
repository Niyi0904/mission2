import React from "react";
import { Link } from "react-scroll";

// import { FaLinkedin, FaGithubSquare,FaWhatsapp, FaFacebook} from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";



// import Buttons from "../buttons/button";



const Live = () =>  {
  return (
<div className="relative h-[485px]">
<div className="relative h-full flex justify-between mx-3">
        <div className=" relative flex flex-col w-[50%] border-x border-y top-[15%] h-[20%] border-gray-500 pt-3 px-3">
            <h1 className="font-semibold text-2xl font-[Merriweather] pb-1">Live Connected</h1>
            <p className="font-semimedium font-[Karla] text-[rgba(10,10,10,0.5)] text-lg mb-7">Join us Live on Miv Radio,  Facebook and Youtube for Service</p>
            
        </div>

        <div className="relative h-full flex justify-center w-[55%] ">
            <div className="rounded-full relative top-[30%] w-[50%] h-[60%] hero2"></div>
        </div>

    </div>
</div>

)}

export default Live;
