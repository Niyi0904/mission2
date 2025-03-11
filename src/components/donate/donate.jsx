import React from "react";
import { Link } from "react-scroll";

// import { FaLinkedin, FaGithubSquare,FaWhatsapp, FaFacebook} from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";



// import Buttons from "../buttons/button";



const Donate = () =>  {
  return (
    <div>
        <div className="relative opacity-70 bg-[#635442] mt-24 h-[450px] flex flex-col space-y-8 justify-center items-center text-white">
            <h1 className="text-5xl font-[Sans-serif] text-center flex justify-center font-bold">No One Has Ever Become <br/>Poor By Giving</h1>

            <h2 className="text-xl font-[Karla]">You can Donate to The Men of Issachar Vision today</h2>

        </div>

        <button className="relative bottom-24 left-[45%] text-white bg-[#FF0046] w-[144px] rounded-md leading-loose font-semibold h-[57px] cursor-pointer text-md">Donate</button>
    </div>

)}

export default Donate;
