import React from "react";
import { Link } from "react-scroll";
import HeroSection from "../herosection/herosection.component";
import Navbar from "../navbar/navbar.component";
// import { FaLinkedin, FaGithubSquare,FaWhatsapp, FaFacebook} from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";



// import Buttons from "../buttons/button";



const Home = () =>  {
  return (
<div className="home h-[96.5vh] bg-[url('asses1.jpg')]" >
    <Navbar/>
    <HeroSection/>
</div>

)}

export default Home;
