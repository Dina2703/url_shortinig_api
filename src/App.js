import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShortenItSection from "./components/ShortenItSection";
import StatsSection from "./components/StatsSection";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App  font-poppins px-6 md:px-12 lg:px-20">
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
