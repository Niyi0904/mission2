import MissionaryJourney from "./pages/2ndmissionarypage/2ndmissionarypage";
import AboutUsPage from "./pages/aboutuspage/aboutuspage";
import HomePage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import MissionsPage from "./pages/missions/missionapage";
import ReawakeningPage from "./pages/reawakening/reawakeingpage";
import PartnershipPage from "./pages/partnership/partnershippage";
import PublicationPage from "./pages/publication/publicationPage";

const App = () => (
  <div className="h-full">
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/aboutus" element={<AboutUsPage/>} />
      <Route path="/2ndmissionaryjourney" element={<MissionaryJourney/>} />
      <Route path="/missions" element={<MissionsPage/>} />
      <Route path="/reawakening" element={<ReawakeningPage/>} />
      <Route path="/publication" element={<PublicationPage/>} />
      <Route path="/partnership" element={<PartnershipPage/>} />
    </Routes>
  </div>
);

export default App;