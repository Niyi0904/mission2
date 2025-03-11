import React from "react";
import { Link } from "react-scroll";

// import { FaLinkedin, FaGithubSquare,FaWhatsapp, FaFacebook} from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";



// import Buttons from "../buttons/button";



const OurMission = () =>  {
  return (
<div className="relative mt-36 h-[1176px] mx-[12%]">
    <div className="relative w-full h-[592px]">
        <h1 className="text-4xl font-[Sans-serif] text-center flex justify-center font-bold">Join Or Mission To <br/>Reach Th Unreached At All Cost</h1>

        <div className="mt-7 px-4 py-4">
            <div className="flex space-x-20">
                <div className="relative w-[57%] hero2 h-[350px]"></div>

                <div className="relative w-[50%]">
                    <p className="font-[Sans-serif] text-lg mb-7 text-[#443535]">We are actively involved in sending individuals and groups,  across boundaries, most commonly geographical boundaries, to carry on evangelism or other activities, such as educational or hospital work.</p>

                    <button className="text-white bg-red-600 w-[32%] font-[Sans-serif] leading-loose font-semibold h-14 cursor-pointer text-sm">READ MORE</button>
                </div>
            </div>
        </div>
    </div>

    <div className="relative mt-24 w-full h-[488px]">
        <h1 className="bg-[rgba(10,10,10,0.06)] flex justify-center items-center relative w-full h-32 font-bold text-4xl font-[Sans-serif]">Reawakening</h1>

        <div className="mt-1 px-4 py-2">
            <div className="flex space-x-20">
                <div className="relative w-[57%] hero2 h-[350px]"></div>

                <div className="relative w-[50%]">
                    <p className="font-[Sans-serif] text-lg mb-7 text-[#443535]">The Men of Issachar Vision Focuses on reawakening the church to her responsibilities by developing strategies which include;</p>

                    <p >
                    The Leadership and Mission Conference, Family life Conference, Back to Bethel Retreat, Alone with God and lots More.</p>

                    <button className="text-white bg-red-600 w-[32%] font-[Sans-serif] leading-loose font-semibold h-14 cursor-pointer text-sm">READ MORE</button>
                </div>
            </div>
        </div>
    </div>
</div>

)}

export default OurMission;
