import React from "react";
import { Link } from "react-scroll";

// import { FaLinkedin, FaGithubSquare,FaWhatsapp, FaFacebook} from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";



// import Buttons from "../buttons/button";



const AboutUs = () =>  {
  return (
<div className="relative aboutus mt-60 h-[510px] mx-[13%]">
    <div className="relative h-full flex justify-between">
        <div className="relative flex flex-col items-center w-[50%] border-x border-y border-gray-100">
            <h1 className="font-bold text-4xl">About us</h1>
            <p className="font-semibold font-[Sans-serif] text-2xl text-black mt-7 mb-7">Missions And Reawakening</p>
            <button className="text-white bg-red-600 w-[32%] leading-loose font-semibold h-14 cursor-pointer text-sm">SHOW MORE</button>
        </div>

        <div className="relative h-full bottom-6 flex flex-wrap my-4 w-[55%] space-x-4 space-y-4">
            <div className=" flex flex-col items-center justify-center ml-4 mt-4 w-[47%] space-y-4 border-y border-x">
                <span className="text-5xl font-bold text-red-600 font-[Merriweather]">16</span>
                <p className="text-base text-gray-500 font-[Karla]">Countries</p>
            </div>
            <div className="shadow-2xl shadow-red-100 w-[47%]"></div>
            <div className="shadow-2xl shadow-red-100 w-[47%]"></div>
            <div className="flex flex-col items-center justify-center ml-4 mt-4 w-[47%] space-y-4 border-y border-x">
                <p className="text-5xl text-red-600 font-[Merriweather]font-bold">25+</p>
                <p className="text-base text-gray-500 font-[Karla]">Mission Fields</p>
            </div>
        </div>

    </div>
</div>

)}

export default AboutUs;
