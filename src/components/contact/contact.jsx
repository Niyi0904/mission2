import { Link } from "react-scroll";

// import { FaLinkedin, FaGithubSquare,FaWhatsapp, FaFacebook} from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";



// import Buttons from "../buttons/button";



const Contact = () =>  {
  return (
<div className="relative bg-gray-200 h-[695px] flex">
    <div className="relative h-full w-full flex justify-between mx-60">
        <div className=" relative flex flex-col w-[60%] pt-[9%] items-center h-full border-gray-500 px-3">
            <h1 className="font-semibold text-3xl font-[Merriweather] pb-1">Contact Us</h1>
            <p className="font-semimedium font-[Karla] text-[rgba(10,10,10,0.5)] text-lg mb-7">For futher Enquiries Please contact us here</p>
            
        </div>

        <div className="relative h-full flex pt-[9%] justify-center w-[55%] ">
            <div className=" relative w-[100%] h-[80%] hero2"></div>
        </div>

    </div>
</div>

)}

export default Contact;
