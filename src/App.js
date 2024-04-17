import ExploreSection from "./components/ExploreSection";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import HirePro from "./components/HirePro";
import HowItWorks from "./components/HowItWorks";
import Info from "./components/Info";
import Marketplace from "./components/Marketplace";
import Navbar from "./components/Navbar";
import ProsSection from "./components/ProsSection";


function App() {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar/>

        <HeroBanner/>

        <Info/>

        <ExploreSection/>

        <HowItWorks/>

        <Marketplace/>

        <ProsSection/>

        <HirePro/>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
