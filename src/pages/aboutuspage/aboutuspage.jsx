import Home from "../../components/home/home.component";
import SubHeroSection from "../../components/herosection/sub-herosection";
import AboutUs from "../../components/aboutus/aboutus";
import OurMission from "../../components/ourmission/ourmission";
import Donate from "../../components/donate/donate";
import Live from "../../components/live/live";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import Home2 from "../../components/home/home2.component";

const AboutUsPage = () => (
  <div className="h-full">
    <Home2/>
    <SubHeroSection/>
    <AboutUs/>
    <OurMission/>
    <Donate/>
    <Live/>
    <Contact/>
    <Footer/>
  </div>
);

export default AboutUsPage;