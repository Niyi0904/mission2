import React from "react";
import { FaHome } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { Links, Link } from "react-router-dom";

// import { FaLinkedin, FaGithubSquare,FaWhatsapp, FaFacebook} from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";



// import Buttons from "../buttons/button";



const HeroSection = () =>  {
  return (
<div className="hero relative text-sm font-bold text-white min-h-[70%] mx-[12%]">
    <div>
        <div className="flex py-9 cursor-pointer">
            <div className="home relative bottom-5 w-12 h-12 flex items-center justify-center rounded-full ">
            </div>
            <h1 className="relative bottom-2 left-2">THE MEN OF ISSACHAR VISION</h1>
        </div>

        <div className="flex gap-10 pb-[70px] cursor-pointer">
            <Link to='/'>
                <button>HOME</button>
            </Link>

            <Link to='/aboutus'>
                <button>ABOUT US</button>
            </Link>

            <button>2ND MISSIONARY JOURNEY</button>

            <Link to='/missions'>
                <button>MISSIONS</button>
            </Link>

            <Link to='/reawakening'>
                <button>REAWAKENING</button>
            </Link>
            
            <button>LIVE +</button>

            <Link to='/publication'>
                <button>PUBLICATIONS</button>
            </Link>
            
            <Link to='/partnership'>
                <button>PARTNERSHIP</button>
            </Link>

        </div>
        
        <div className="flex relative left-5 gap-3 pb-20 cursor-pointer">
            <button>REGISTRATION</button>
            <button>CONTACT US</button>
        </div>

        <div className="flex justify-between">
            <div className="relative text-lg bottom-4 space-x-8">
                <button className="cursor-pointer"><GrCart /></button>
                <button className="cursor-pointer font-bold"><IoIosSearch />
                </button>
            </div>

            <div className="relative space-y-2 bottom-8">
                <div className="text-2xl flex justify-center">
                    <h1 className="text-blue-300 font-bold">THE HOME OF THE ISSACHARS</h1>
                </div>
                <div className="text-6xl flex space-x-5 font-bold">
                    <FaHome />
                    <h1>WELCOME TO MIV</h1>
                </div>
                <div className="text-yellow-600 font-bold flex justify-center text-2xl">
                    <h1>MISSION | REAWAKENNG</h1>
                </div>
                <div className="pt-9 flex justify-center">
                    <button className=" bg-pink-800 w-[18%] h-12 rounded-md cursor-pointer">Explore</button>
                </div>
            </div>

            <div className="flex flex-col space-y-2 relative bottom-10">
                <button className="bg-[rgb(0,0,0,0.5)] w-16 h-16 flex items-center justify-center rounded-full"><MdArrowForwardIos className="text-xl"/>
                </button>

                <button className="bg-[rgb(0,0,0,0.5)] w-16 h-16 flex items-center justify-center rounded-full"><MdArrowBackIosNew className="text-xl"/>
                </button>
            </div>
        </div>
    </div>
</div>

)}
 
export default HeroSection;
