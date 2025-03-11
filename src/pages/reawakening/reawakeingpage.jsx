import Home from "../../components/home/home.component";
import SubHeroSection from "../../components/herosection/sub-herosection";
import AboutUs from "../../components/aboutus/aboutus";
import OurMission from "../../components/ourmission/ourmission";
import Donate from "../../components/donate/donate";
import Live from "../../components/live/live";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Home2 from "../../components/home/home2.component";
import Home3 from "../../components/home/home3.component";
import Home4 from "../../components/home/home4.component";

const Reawakening = () => (
  <div className="h-full">
    <Home4/>
    <SubHeroSection/>
    <AboutUs/>
    <OurMission/>
    <Donate/>
    <Live/>
    <Contact/>
    <Footer/>
  </div>
);

export default Reawakening;