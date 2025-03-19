import React from "react";
import { Link } from "react-scroll";
import HeroSection from "../herosection/herosection.component";
import Navbar from "../navbar/navbar.component";
// import { FaLinkedin, FaGithubSquare,FaWhatsapp, FaFacebook} from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";



// import Buttons from "../buttons/button";



const Home = () =>  {
  return (
<div className="h-[96.5vh] bg-[url('/public/images/image-1.jpg')] bg-cover bg-no-repeat bg-center" >
    <Navbar/>
    <HeroSection/>
</div>

)}

export default Home;
