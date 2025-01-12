import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RecognitionSection from "./components/RecognitionSection";
import Process from "./components/Process";
import Feature from "./components/feature/FeatureSection";
import AboutProductSection from "./components/AboutProductSection";
import EmissionSection from "./components/EmissionSection";
import ClimateDisclosure from "./components/ClimateDisclosure";
import MissionComponent from "./components/MissionComponent";
import SustainableDevelopmentGoals from "./components/SustainableDevelopmentGoals";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <RecognitionSection />
      <Process/>
      <Feature  />
      <AboutProductSection  />
      <EmissionSection  />
      <ClimateDisclosure  />
      <MissionComponent  />
      <SustainableDevelopmentGoals  />
      <SubscribeSection  />
      <Footer/>
    </>
  );
}

export default App;

