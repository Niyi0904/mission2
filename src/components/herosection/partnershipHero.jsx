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



const PartnershipHero = ({bg}) =>  {
  return (
<div className="hero relative text-sm font-bold text-black min-h-[70%]">
    <div className="relative w-full">
        <div className="mx-[12%]">
            <div className="flex py-9 cursor-pointer">
                <div className="home relative bottom-5 w-12 h-12 flex items-center justify-center rounded-full ">
                </div>
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

            <div className="relative text-lg bottom-4 space-x-8">
                <button className="cursor-pointer"><GrCart /></button>
                <button className="cursor-pointer font-bold"><IoIosSearch />
                </button>
            </div>
        </div>
        

        <div>
            <div style={{backgroundColor: `${bg}`, opacity:'0.67'}} className="flex relative w-[100%] h-[100vh]  justify-center space-x-32 mb-20">
                <h1 className="text-4xl font-bold text-white">PUBLICATION</h1>
            </div>
        </div>
    </div>
</div>

)}
 
export default PartnershipHero;
