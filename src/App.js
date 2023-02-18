import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShortenItSection from "./components/ShortenItSection";
import StatsSection from "./components/StatsSection";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App  font-poppins">
      <Navbar />
      <HeroSection />
      <ShortenItSection />
      <StatsSection />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
