import React from "react";
import { Link } from "react-scroll";
import HeroSection from "../herosection/herosection.component";
import Navbar from "../navbar/navbar.component";
import AboutHero from "../herosection/abouthero.component";
import MissionsHero from "../herosection/missionsHero.component";
// import { FaLinkedin, FaGithubSquare,FaWhatsapp, FaFacebook} from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";



// import Buttons from "../buttons/button";



const Home3 = () =>  {
  return (
<div className="h-[96.5vh]" >
    <Navbar bg='black'/>
    <MissionsHero bg='transparent' bgImg='linear-gradient(140deg, #C51573 50%, #0D60B2 100%)'/>
</div>

)}

export default Home3;
