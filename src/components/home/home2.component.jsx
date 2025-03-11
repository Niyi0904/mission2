import React from "react";
import { Link } from "react-scroll";
import HeroSection from "../herosection/herosection.component";
import Navbar from "../navbar/navbar.component";
import AboutHero from "../herosection/abouthero.component";
// import { FaLinkedin, FaGithubSquare,FaWhatsapp, FaFacebook} from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";



// import Buttons from "../buttons/button";



const Home2 = () =>  {
  return (
<div className="h-[96.5vh]" >
    <Navbar bg='black'/>
    <AboutHero/>
</div>

)}

export default Home2;
